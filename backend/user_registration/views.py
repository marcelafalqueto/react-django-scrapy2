from django.shortcuts import render
from rest_framework import viewsets
from .serializer import UserRegistrationSerializer
from .models import UserRegistration


class UserRegistrationView(viewsets.ModelViewSet):
    serializer_class = UserRegistrationSerializer
    queryset = UserRegistration.objects.all()
    