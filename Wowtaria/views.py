#from django.http import HttpResponse
from django.shortcuts import redirect

def index(request):
	# return HttpResponse("""Siccome mi son rotto il cazzo di una pagina di errore ho fatto questa cosa qua.
	# 	<ul>
	# 		<li><a href="./annotaria/">Wowtaria</a>
	# 		<li><a href="./admin/">Admin</a>
	# 	</ul>
	# 	Saluti, Devid.
	# 	""")
	return redirect("/annotaria")