from django.db import models

# Create your models here.
class React(models.Model):
    auction_type = models.CharField(max_length=500, null=True)
    neighborhood = models.CharField(max_length=500, null=False, default='')
    address = models.CharField(max_length=500, null=False, default='')
    data_auction1 = models.CharField(max_length=500, null=False, default='')
    initial_bid1 = models.CharField(max_length=500, null=False, default='')
    data_leilao2 = models.CharField(max_length=500, null=False, default='')
    initial_bid2 = models.CharField(max_length=500, null=False, default='')
    open_or_closed = models.CharField(max_length=500, null=False, default='')
    link_image = models.CharField(max_length=500, null=False, default='')
    link_auction = models.CharField(max_length=500, null=False, default='')