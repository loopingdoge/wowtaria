from django.conf.urls import patterns, url

from annotaria import views

urlpatterns = patterns('',
    url(r'^$', views.index, name='index'),
    url(r'^form/$', views.form, name='form'),
    url(r'^annotations/person/$',   views.person, name='person'),
    url(r'^annotations/disease/$',  views.disease, name='disease'),
    url(r'^annotations/place/$',    views.place, name='place'),
    url(r'^annotations/publisher/$',views.publisher, name='publisher'),
    url(r'^annotations/subject/$',  views.subject, name='subject'),
    url(r'^annotations/person/(?P<person>[A-Za-z0-9:/@.<>_-]+)/$', views.personDetail, name='personDetail'),
    url(r'^annotations/class/(?P<classname>[A-Za-z0-9:/@.-]+)/$', views.classe, name='classe'),
    url(r'^annotations/dbpedia/(?P<resource>[A-Za-z0-9:/@.<>_-]+)/$', views.dbpedia, name='dbpedia'),
    url(r'^documents/$', views.documents, name='documents'),
    url(r'^documents/(?P<docname>[A-Za-z0-9_()-]+\.html)/title$',                   views.document_title, name='document_title'),
    url(r'^documents/(?P<docname>[A-Za-z0-9_()-]+\.html)/body$',                    views.document_body, name='documents_name'),
    url(r'^documents/(?P<docname>[A-Za-z0-9_()-]+\.html)/abstract$',                views.document_abstract, name='document_abstract'),
    url(r'^documents/(?P<docname>[A-Za-z0-9_()-]+\.html)/annotations$',             views.annotations, name='annotations'),
    url(r'^documents/(?P<docname>[A-Za-z0-9_()-]+\.html)/annotationsFragments$',    views.annotations_fragments, name='annotations_fragments'),
    url(r'^documents/(?P<docname>[A-Za-z0-9_()-]+\.html)/persons$',                 views.annotations_persons, name='annotations_persons'),
    url(r'^insert/$', views.insert, name='insert'),
)