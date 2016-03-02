# Restituisce l'URL del triple store (select)
def getFusekiSelectURL():
	return "http://giovanna.cs.unibo.it:8181/data/query"

	# Restituisce l'URL del triple store (update)
def getFusekiUpdateURL():
	return "http://giovanna.cs.unibo.it:8181/data/update"

# Restituisce l'URL del triple store di DBPedia
def getDBPediaURL():
	return "http://dbpedia.org/sparql"

# Dato il tipo di annotazione restituisce la label appropriata
def getLabel(_type):
	label = {}
	label['cites'] = 'Citazione'
	label['denotesDisease'] = 'Malattia'
	label['denotesPerson'] = 'Persona'
	label['denotesPlace'] = 'Luogo'
	label['hasAbstract'] = 'Riassunto'
	label['hasAuthor'] = 'Autore'
	label['hasClarityScore'] = 'Chiarezza'
	label['hasComment'] = 'Commento personale'
	label['hasFormattingScore'] = 'Presentazione'
	label['hasOriginalityScore'] = 'Originalita\''
	label['hasPublicationYear'] = 'Anno di pubblicazione'
	label['hasPublisher'] = 'Editore'
	label['hasShortTitle'] = 'Titolo breve'
	label['hasSubject'] = 'Argomento principale'
	label['hasTitle'] = 'Titolo'
	label['relatesTo'] = 'Risorsa DBPedia'
	return label[_type]

# Dato il tipo di annotazione restituisce il predicato appropriato
def getPredicate(_type):
	predicate = {}
	predicate['cites'] = 'cito:cites'
	predicate['denotesDisease'] = 'sem:denotes'
	predicate['denotesPerson'] = 'sem:denotes'
	predicate['denotesPlace'] = 'sem:denotes'
	predicate['hasAbstract'] = 'dcterms:abstract'
	predicate['hasAuthor'] = 'dcterms:creator'
	predicate['hasClarityScore'] = 'ao:hasClarityScore'
	predicate['hasComment'] = 'schema:comment'
	predicate['hasFormattingScore'] = 'ao:hasFormattingScore'
	predicate['hasOriginalityScore'] = 'ao:hasClarityScore'
	predicate['hasPublicationYear'] = 'fabio:hasPublicationYear'
	predicate['hasPublisher'] = 'dcterms:publisher'
	predicate['hasShortTitle'] = 'fabio:hasShortTitle'
	predicate['hasSubject'] = 'fabio:hasSubjectTerm'
	predicate['hasTitle'] = 'dcterms:title'
	predicate['relatesTo'] = 'skos:related'
	return predicate[_type]

# Restituisce una stringa contenente tutti i prefissi da usare nelle query
def getAllPrefixes():
	prefixes = """
	PREFIX oa: <http://www.w3.org/ns/oa#>
	PREFIX ao: <http://vitali.web.cs.unibo.it/AnnOtaria/>
	PREFIX aop: <http://vitali.web.cs.unibo.it/AnnOtaria/person/>
	PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
	PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
	PREFIX foaf: <http://xmlns.com/foaf/0.1/>
	PREFIX dcterms:  <http://purl.org/dc/terms/>
	PREFIX xsd:   <http://www.w3.org/2001/XMLSchema#>
	PREFIX frbr:  <http://purl.org/vocab/frbr/core#>
	PREFIX cito: <http://purl.org/spar/cito/>
	PREFIX sem:   <http://www.ontologydesignpatterns.org/cp/owl/semiotics.owl#>
	PREFIX fabio: <http://purl.org/spar/fabio/> 
	PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
	PREFIX schema: <http://schema.org/>
	PREFIX dbpedia: <http://dbpedia.org/resource/>
	"""
	return prefixes

# Controlla che i parametri di POST siano validi
# Resituisce una stringa contenente una descrizione gli errori, se presenti
def checkPOST(post):
	errors = ""
	# Controlla se annotatedBy esiste ed e' una stringa
	if 'annotatedBy' 	not in post:
		errors = errors + "missing annotatedBy parameter\n"
	elif not isinstance(post['annotatedBy'], (str, unicode)):
		errors = errors + "annotatedBy is not a String\n"

	# Controlla se annotatedAt esiste
	if 'annotatedAt' 	not in post:
		errors = errors + "missing annotatedAt parameter\n"

	# Controlla se subject esiste ed e' una stringa
	if 'subject'		not in post:
		errors = errors + "missing subject parameter\n"
	elif not isinstance(post['subject'], (str, unicode)):
		errors = errors + "subject is not a String\n"

	# Controlla se type esiste ed e' una stringa
	if 'type'			not in post:
		errors = errors + "missing type parameter\n"
	elif not isinstance(post['type'], (str, unicode)):
		errors = errors + "type is not a String\n"

	# Controlla se object esiste ed e' una stringa
	if 'object'		not in post:
		errors = errors + "missing object parameter\n"
	elif not isinstance(post['object'], (str, unicode)):
		errors = errors + "object is not a String\n"

	# Controlla se label esiste ed e' una stringa
	if 'label'		not in post:
		errors = errors + "missing label parameter\n"
	elif not isinstance(post['label'], (str, unicode)):
		errors = errors + "label is not a String\n"	

	if 'isFragment'	in post:
		# Controlla se value(id) esiste
		if 'value'	not in post:
			errors = errors + "missing value parameter\n"

		# Controlla se start esiste, e' int ed e' non negativo
		if 'start'	not in post:
			errors = errors + "missing start index parameter\n"
		elif not isinstance(post['start'], (int, long, unicode)):
			errors = errors + "start is not an integer\n"
		elif post['start'] < 0:
			errors = errors + "start must be not negative integer\n"

		# Controlla se end esiste, e' int ed e' non negativo
		if 'end'	not in post:
			errors = errors + "missing end index parameter\n"
		elif not isinstance(post['end'], (int, long, unicode)):
			errors = errors + "end is not an integer\n"
		elif post['end'] < 0:
			errors = errors + "end must be not negative integer\n"

	return errors

# Query per ottenere le annotazioni sul documento
def selectDocumentAnnotation(docname):
	query = getAllPrefixes()
	query = query + """
	SELECT DISTINCT ?type ?label ?annotatedAt ?annotatedBy ?object
	WHERE {
		?x a oa:Annotation .
		?x ao:type ?type .
		?x oa:hasTarget <http://vitali.web.cs.unibo.it/AnnOtaria/""" + docname + """> .
	    ?x oa:annotatedAt ?annotatedAt .
	    ?x oa:annotatedBy ?annotatedBy .
		?x oa:hasBody ?y .
		?y rdfs:label ?label .
		?y rdf:object ?object
	} ORDER BY ?type
	"""
	return query

# Query per ottenere le annotazioni sul corpo del documento
def selectFragmentAnnotation(docname):
	query = getAllPrefixes()
	query = query + """
	SELECT DISTINCT ?type ?label ?id ?start ?end ?object ?annotatedBy ?annotatedAt
	WHERE {
		?x a oa:Annotation .
		?x ao:type ?type .
		?x oa:hasTarget ?y .
		?x oa:annotatedAt ?annotatedAt .
	    ?x oa:annotatedBy ?annotatedBy .
		?y oa:hasSource <http://vitali.web.cs.unibo.it/AnnOtaria/""" + docname + """> .
		?y oa:hasSelector ?selector .
		?selector rdf:value ?id ;
		oa:end ?end ;
		oa:start ?start .
		?x oa:hasBody ?z .
		?z rdfs:label ?label .
		?z rdf:object ?object
	} ORDER BY ?type
	"""
	return query;

def checkInstanceParams(post):
	if 'uri' in post:
		if not post['uri'].startswith('<'):
			post['uri'] = '<' + post['uri'] + '>'
	if 'homepage' in post:
		if not post['homepage'].startswith('<'):
			post['homepage'] = '<' + post['homepage'] + '>'
	return post

def insertPersonQuery(person):
	query = getAllPrefixes()
	params = person.copy()
	params = checkInstanceParams(params)
	query = query + """ INSERT DATA {
		""" + params['uri'] + 	""" a foaf:Person ;
			foaf:name 		\"""" + params['label'] + """\" ; """
	if 'mail' in params:
		query = query + "schema:email 	\"" + params['mail'] + "\""
	query = query + " }"
	return query

def insertDiseaseQuery(disease):
	query = getAllPrefixes()
	params = disease.copy()
	params = checkInstanceParams(params)
	query = query + """
	INSERT DATA {
		""" + params['uri'] + """ a skos:Concept ;
			rdfs:label 		\"""" + params['label'] + """\" 
	}
	"""
	return query

def insertPlaceQuery(place):
	query = getAllPrefixes()
	params = place.copy()
	params = checkInstanceParams(params)
	query = query + """
	INSERT DATA {
		""" + params['uri'] + 	""" a dbpedia:Place ;
			rdfs:label 		\"""" + params['label'] + """\"
	}
	"""
	return query

def insertPublisherQuery(publisher):
	query = getAllPrefixes()
	params = publisher.copy()
	params = checkInstanceParams(params)
	query = query + """
	INSERT DATA {
		""" + params['uri'] + 	""" a foaf:Organization ;
			foaf:name 			\"""" + params['label'] + """\" ;"""
	if 'homepage' in params:
		query = query + "foaf:homepage " + params['homepage']

	query = query + " }"
	return query

def insertSubjectQuery(subject):
	query = getAllPrefixes()
	params = subject.copy()
	params = checkInstanceParams(params)
	query = query + """
	INSERT DATA {
		""" + subject['uri'] + """ a skos:Concept ;
			rdfs:label 		\"""" + subject['label'] + """\" 
	}
	"""
	return query

# Query per ottenere le informazioni dato l'URI di una persona
def selectPersonQuery(person):
	query = getAllPrefixes()
	query = query + """
	SELECT DISTINCT ?name ?mail
	WHERE {
		""" + person + """ foaf:name ?name .
		""" + person + """ schema:email ?mail
	}
	"""
	return query

# Query per ottenere tutte le persone che hanno annotato un documento
def selectPersonsWhoAnnotatedQuery(docname):
	query = getAllPrefixes()
	query = query + """
	SELECT DISTINCT ?name ?mail ?uri
	WHERE{
		{
			?a 	a oa:Annotation ;
				oa:hasTarget <http://vitali.web.cs.unibo.it/AnnOtaria/""" + docname + """> ;
				oa:annotatedBy ?uri .
			?uri foaf:name ?name .
			OPTIONAL {
				?uri schema:email ?mail
			}
		}
		UNION
		{
			?a 	a oa:Annotation ;
				oa:annotatedBy ?uri ;
				oa:hasTarget ?target .
			?target oa:hasSource <http://vitali.web.cs.unibo.it/AnnOtaria/""" + docname + """> .
			?uri foaf:name ?name .
			OPTIONAL {
				?uri schema:email ?mail
			}
		}
	}
	"""
	return query

# Query per ottenere tutte le istanze di una data classe
def selectClassQuery(classname):
	query = getAllPrefixes()
	_type = {}
	_need = {}
	_type['person'] = 'foaf:Person'
	_need['person'] = 'foaf:name'
	_type['place'] = '"denotesPlace"'
	_type['disease'] = '"denotesDisease"'
	_type['subject'] = '"hasSubject"'
	_type['publisher'] = 'foaf:Organization'
	_need['publisher'] = 'foaf:name'
	if classname == "person" or classname == "publisher":
		query = query + """
			SELECT ?instance ?label
			WHERE {
				?instance  a """ + _type[classname] + """ ;
				""" + _need[classname] + """ ?label
			} ORDER BY ?label
		"""
	elif classname == "disease" or classname == "place" or classname == "subject":
		query = query + """
			SELECT DISTINCT ?instance ?label
			WHERE{
			    ?annotation a oa:Annotation ;
			                ao:type """ + _type[classname] + """ ;
			                oa:hasBody ?body .
			    ?body rdf:object ?instance ;
			          rdfs:label ?label
			} ORDER BY ?label
		"""
	elif classname == "annotators":
		query = query + """
		SELECT DISTINCT ?annotator ?name
		WHERE {
		    ?annotation a oa:Annotation ;
		    oa:annotatedBy ?annotator ;
		    oa:hasTarget ?y .
		    ?y oa:hasSource ?docname .
		    OPTIONAL{
		        ?annotator foaf:name ?name
		    }
		}
		"""
	else:
		query = ""
	return query


# Query per inserire un'annotazione sul documento
def insertDocumentAnnotation(data):
	_type = data['type']
	annotatedBy = data['annotatedBy']
	annotatedAt = data['annotatedAt']
	subject = data['subject']
	_object = data['object']
	label = data['label']
	query = getAllPrefixes()
	query = query + """
		INSERT DATA {
			[] a oa:Annotation ;
			rdfs:label \"""" + getLabel(_type) + """\" ;
			ao:type \"""" + _type + """\" ;
			oa:annotatedAt \"""" + annotatedAt + """\" ;
			oa:annotatedBy """ + annotatedBy + """ ;
			oa:hasBody		[ 	a 				rdf:Statement ;
								rdf:object 		""" + _object + """ ;
								rdf:predicate 	""" + getPredicate(_type) + """ ;
								rdf:subject 	ao:""" + subject + """ ;
								rdfs:label 		\"""" + label + """\"
							] ;
			oa:hasTarget 	ao:""" + subject + """
		}
	"""
	return query

# Query per inserire un'annotazione sul corpo del documento
def insertFragmentAnnotation(data):
	_type = data['type']
	annotatedBy = data['annotatedBy']
	annotatedAt = data['annotatedAt']
	subject = data['subject']
	_object = data['object']
	label = data['label']
	value = data['value']
	start = data['start']
	end = data['end']
	completeSubject = "<http://annotaria.web.cs.unibo.it/documents/" + subject + "#" + value + "-" + start + "-" + end + ">"
	subject = subject.replace("(", "\(").replace(")", "\)")
	query = getAllPrefixes()
	query = query + """
		INSERT DATA {
			[] a oa:Annotation ;
			rdfs:label \"""" + getLabel(_type) + """\" ;
			ao:type \"""" + _type + """\" ;
			oa:annotatedAt \"""" + annotatedAt + """\" ;
			oa:annotatedBy """ + annotatedBy + """ ;
			oa:hasBody		[ 	a 				rdf:Statement ;
								rdf:object 		""" + _object + """ ;
								rdf:predicate 	""" + getPredicate(_type) + """ ;
								rdf:subject 	""" + completeSubject + """ ;
								rdfs:label 		\"""" + label + """\"
							] ;
			oa:hasTarget 	[	a 				oa:SpecificSelector ;
								oa:hasSelector	[ 	a 			oa:FragmentSelector ;
													rdf:value	\"""" + value + """\" ;
													oa:end 		\"""" + end + """\"^^xsd:nonNegativeInteger ;
													oa:start 	\"""" + start + """\"^^xsd:nonNegativeInteger
												] ;
								oa:hasSource 	ao:""" + subject + """
								
							]
		}
	"""
	return query

# Query per ottenere la descrizione di una risorsa da DBPedia 
def dbpediaAbstract(resource):
	query = """
		SELECT ?abstract
		WHERE {
			<http://dbpedia.org/resource/""" + resource.capitalize() + """> dbpedia-owl:abstract ?abstract
		FILTER langMatches( lang(?abstract), 'en')
		}
	"""
	return query