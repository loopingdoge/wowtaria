from django.conf.urls import patterns, include, url

from django.contrib import admin
from Wowtaria.views import index
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'Wowtaria.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^annotaria/', include('annotaria.urls', namespace="annotaria")),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', index)
)
