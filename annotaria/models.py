from django.db import models
from bs4 import BeautifulSoup

class DocumentTitle(models.Model):
	filename = models.CharField(max_length=150)
	title = models.CharField(max_length=150)

	def __unicode__(self):
		return self.filename