from django.contrib import admin
from annotaria.models import DocumentTitle
# Register your models here.

class DocumentTitleAdmin(admin.ModelAdmin):
	fields = ['filename', 'title']

admin.site.register(DocumentTitle, DocumentTitleAdmin)