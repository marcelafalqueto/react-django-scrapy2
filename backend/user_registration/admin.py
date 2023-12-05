from django.contrib import admin
from .models import UserRegistration

class UserRegistrationAdmin(admin.ModelAdmin):
    list_display = (
    'name',
    'cpf',
    'cep',
    'cellphone', 
    'email',
    'password' 
    )
        
    
admin.site.register(UserRegistration, UserRegistrationAdmin)