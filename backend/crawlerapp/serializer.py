from rest_framework import serializers
from .models import React

class ReactSerializer(serializers.ModelSerializer):
    class Meta:
        model = React
        fields = [
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
            ]