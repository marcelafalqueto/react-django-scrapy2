from django.contrib import admin
from django.urls import path, include
from rest_framework import routers


################# views
from crawlerapp import views as crawlerapp_views
from crawlerapp.views import ReactView

from user_registration import views as user_registration_views
from user_registration.views import UserRegistrationView

# from authentication import views as authentication_views
# from authentication.views import AuthenticationView

# from authentication import views 
from authentication.views import RegisterView, LoginView



router = routers.DefaultRouter()
router.register(r'tasks', crawlerapp_views.ReactView, 'task')
router.register(r'registrations', user_registration_views.UserRegistrationView, 'registration')

# router.register(r'registrations', RegisterView, 'registration')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('authentication/', LoginView.as_view(), name='authentication'),
]