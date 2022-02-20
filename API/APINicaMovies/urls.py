from django import views
from django.urls import path
from .views import create, delete, login, opinions
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('user/login/<str:email>', login),
    path('user/opinions/<str:id>', opinions),
    path('user/delete/<int:id>', delete),
    path('test', create),
    path('auth', obtain_auth_token)
]  
