from django.contrib import admin
from django.urls import path, include
# from django.conf.urls import urls
from crawlerapp.views import *
from crawlerapp import views as crawlerapp_views
from user_registration import views as user_registration_views
from user_registration.views import *
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'tasks', crawlerapp_views.ReactView, 'task')
router.register(r'registrations', user_registration_views.UserRegistrationView, 'registration')

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('', ReactView.as_view(), name="xxx"),
    path('api/', include(router.urls)),
]