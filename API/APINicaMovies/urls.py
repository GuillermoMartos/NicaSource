from django import views
from django.urls import path
from .views import created, delete, login, opinions, register
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('user/login/<str:email>', login),
    path('user/register', register),
    path('user/opinions/<int:id>', opinions),
    path('user/delete/<int:id>', delete),
    path('test', created),
    path('auth', obtain_auth_token)
]  
