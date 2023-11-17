from django.contrib import admin
from .models import React

class ReactAdmin(admin.ModelAdmin):
    list_display = (
            'auction_type',
            'neighborhood',
            'address',
            'data_auction1',
            'initial_bid1',
            'data_leilao2',
            'initial_bid2',
            'open_or_closed',
            'link_image',
            'link_auction'
        )

    
admin.site.register(React, ReactAdmin)