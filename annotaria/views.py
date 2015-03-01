from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseNotFound, HttpResponseNotAllowed, Http404
from django.views.decorators.csrf import ensure_csrf_cookie
from django.shortcuts import render_to_response
from django.core.context_processors import csrf
from annotaria.models import DocumentTitle
from bs4 import BeautifulSoup
from SPARQLWrapper import SPARQLWrapper
from annotations import *
import json
import urllib2

@ensure_csrf_cookie
def index(request):
	return render(request, 'annotaria/index.html')

def form(request):
	return render(request, 'annotaria/form.html')

def notAllowedText(method):
	return 'Only '+ method +' method allowed'

# Restiuisce l'oggetto soup relativo al documento passato per parametro.
# Chiamando la funzione senza parametri si ottiene la pagina con la lista dei documenti.
def getDocumentSoup(docname=""):
	page = urllib2.urlopen("http://annotaria.web.cs.unibo.it/documents/" + docname)
	html = page.read()
	soup = BeautifulSoup(html)
	return soup

# Restituisce una risposta codificata in JSON contentente la lista dei filename dei documenti
# TODO: sostituire title col vero titolo
# {  
# 	"docs":[  
#   	{  
#       	"filename":	"BMC_Bioinformatics_2008_Oct_1_9_406_ver1.html",
#       	"title":	"BMC_Bioinformatics_2008_Oct_1_9_406_ver1.html"
#       }, ... ]
# }
def documents(request):
	if request.method == "GET":
		# Apre la pagina ed ottiene la stringa HTML
		soup = getDocumentSoup()
		response = {}
		# Elemento radice della struttura JSON
		response['docs'] = []
		# Trova tutti i link presenti nella pagina
		for filename in soup.findAll("a"):
			# Se e' un documento HTML
			if filename.contents[0].endswith(".html"):
				docTitle = ""
				# Inserisce una tupla contenente id e titolo del documento ed appende alla lista
				try:
					docTitle = DocumentTitle.objects.get(filename=filename.contents[0]).title
				except DocumentTitle.DoesNotExist:
					soupTitle = getDocumentSoup(filename.contents[0])
					substrings = soupTitle.find("h1", class_="document-title").strings
					for string in substrings:
						docTitle = docTitle + string
					docTitle = docTitle.strip(" \n");
					t = DocumentTitle(filename=filename.contents[0], title=docTitle)
					t.save()
				infos = ({'title':docTitle, 'filename':filename.contents[0]})
				#infos = ({'title':filename.contents[0], 'filename':filename.contents[0]})
				response['docs'].append(infos)
		# Restituisce la stringa codificata in JSON
		return HttpResponse(json.dumps(response), content_type="application/json")
	else:
		return HttpResponseNotAllowed(notAllowedText("GET"))

# Restituisce una risposta codificata in JSON contenente l'HTML del body del documento
# {
# 	"html": "..."
# }
def document_body(request, docname):
	if request.method == "GET":
		soup = getDocumentSoup(docname)
		# Estraggo il body
		article_body = soup.body
		# Cancello l'article_front
		article_body.find("div", id="article1-front").extract()
		# Restituisco l'articolo
		response = {}
		response['html'] = ""
		if article_body:
			response['html'] = article_body.encode('utf-8')
		return HttpResponse(json.dumps(response), content_type="application/json")
	else:
		return HttpResponseNotAllowed(notAllowedText("GET"))

# Restituisce una risposta codificata in JSON contenente l'HTML i metadati del documento
# {
# 	"html": "..."
# }
def document_abstract(request, docname):
	if request.method == "GET":
		soup = getDocumentSoup(docname)
		article_front = soup.find("div", id="article1-front")
		response = {}
		response['html'] = ""
		if article_front:
			response['html'] = response['html'] + article_front.encode('utf-8')
		return HttpResponse(json.dumps(response), content_type="application/json")
	else:
		return HttpResponseNotAllowed(notAllowedText("GET"))

# Restituisce una risposta codificata in JSON contenente l'HTML il titolo del documento
# {
# 	"title": "..."
# }
def document_title(request, docname):
	if request.method == "GET":
		soup = getDocumentSoup(docname)
		substrings = soup.find("h1", class_="document-title").strings
		title = ""
		for string in substrings:
			title = title + string
		title = title.strip(" \n");
		response = {}
		response['title'] = title
		return HttpResponse(json.dumps(response), content_type="application/json")
	else:
		return HttpResponseNotAllowed(notAllowedText("GET"))

def insertInstance(request, queryFn):
	if request.method == "POST":
		sparql = SPARQLWrapper(getFusekiUpdateURL(), returnFormat="json")
		query = queryFn(request.POST)
		#return HttpResponse(query)
		sparql.setQuery(query)
		return HttpResponse(json.dumps(sparql.query().convert()), content_type="application/json")
	else:
		return HttpResponseNotAllowed(notAllowedText("POST"))

def getGeneral(request, param, queryFn, serverFn=getFusekiSelectURL):
	if request.method == "GET":
		sparql = SPARQLWrapper(serverFn(), returnFormat="json")
		query = queryFn(param)
		sparql.setQuery(query)
		return HttpResponse(json.dumps(sparql.query().convert()), content_type="application/json")
	else:
		return HttpResponseNotAllowed(notAllowedText("GET"))

# Restituisce le annotazioni sul documento in formato JSON
def annotations(request, docname):
	return getGeneral(request, docname, selectDocumentAnnotation)

# Restituisce le annotazioni sul documento in formato JSON
def annotations_fragments(request, docname):
	return getGeneral(request, docname, selectFragmentAnnotation)

# Restituisce nome ed email di una persona dato il suo URI
def personDetail(request, person):
	return getGeneral(request, person, selectPersonQuery)

# Restituisce tutte le istanze di una determinata classe
def classe(request, classname):
	return getGeneral(request, classname, selectClassQuery)

# Restituisce tutte le persone che hanno annotato un documento
def annotations_persons(request, docname):
	return getGeneral(request, docname, selectPersonsWhoAnnotatedQuery)

# Restituisce la descrizione di una risorsa da DBPedia
def dbpedia(request, resource):
	return getGeneral(request, resource, dbpediaAbstract, getDBPediaURL)

# Inserisce una nuova annotazione con i dati passati per metodo POST
def insert(request):
	if request.method == "POST":
		errors = checkPOST(request.POST)
		if errors == "":
			query = ""
			if 'isFragment' in request.POST:
				query = insertFragmentAnnotation(request.POST)
			else:
				query = insertDocumentAnnotation(request.POST)
			sparql = SPARQLWrapper(getFusekiUpdateURL(), returnFormat="json")
			sparql.setQuery(query)
			#return HttpResponse(query)
			return HttpResponse(json.dumps(sparql.query().convert()), content_type="application/json")
		else:
			return HttpResponse(errors)
	else:
		return HttpResponseNotAllowed(notAllowedText("POST"))

# Inserisce una nuova istanza di persona
def person(request):
	return insertInstance(request, insertPersonQuery)

def disease(request):
	return insertInstance(request, insertDiseaseQuery)
	
def place(request):
	return insertInstance(request, insertPlaceQuery)

def publisher(request):
	return insertInstance(request, insertPublisherQuery)

def subject(request):
	return insertInstance(request, insertSubjectQuery)
