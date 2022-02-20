from rest_framework import serializers
from .models import User, Film

class UserSerializer(serializers.ModelSerializer):
     class Meta:
        model=User
        fields='__all__'
        extra_kwargs={'password':{
            'write_only': True,
            'required': True
        }}



class FilmSerializer(serializers.ModelSerializer):
    class Meta:
        model=Film
        fields='__all__'