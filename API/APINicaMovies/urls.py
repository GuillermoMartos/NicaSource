from django import views
from django.urls import path
from .views import Index

urlpatterns = [
    path('', Index),
] 