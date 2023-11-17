import scrapy
from scrapy_djangoitem import DjangoItem
from crawlerapp.models import React

class MovieItem(DjangoItem):
    django_model = React