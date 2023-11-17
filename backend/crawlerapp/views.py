from django.shortcuts import render
from rest_framework import viewsets
from .serializer import ReactSerializer
from .models import React


class ReactView(viewsets.ModelViewSet):
    serializer_class = ReactSerializer
    queryset = React.objects.all()
    