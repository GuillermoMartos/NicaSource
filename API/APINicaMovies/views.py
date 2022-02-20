from .models import Film, User
from .serializers import UserSerializer, FilmSerializer
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authentication import BasicAuthentication
from rest_framework.permissions import IsAuthenticated

# Create your views here.

#we won't use viewSets, mixins or class api views, for the simplicity of this project, but if it intend to grow larger, that would be a good idea in order to make more complex querysets and reuse code and keep it DRY. For the sake of this simplicity idea, all function based views have permissions added.


@api_view(['GET', 'POST'])
# @authentication_classes([BasicAuthentication])
# @permission_classes([IsAuthenticated])
def create(request):
    if request.method == 'GET':
        user = User.objects.all()
        serializer = UserSerializer(user, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # case post

    elif request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_401_UNAUTHORIZED)


@api_view(['GET'])
# @authentication_classes([BasicAuthentication])
# @permission_classes([IsAuthenticated])
# el pk se lo mando en la url user/pk:
def login(request, email):
    try:
        user = User.objects.get(email=email)
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = UserSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['POST', 'GET'])
# @authentication_classes([BasicAuthentication])
# @permission_classes([IsAuthenticated])
def opinions(request, id):
    # data=id_film, comment or review, user_id y ___date es now que viene en el modelo??
    if request.method == 'POST':
        serializer = FilmSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED1)
        return Response(serializer.errors, status=status.HTTP_401_UNAUTHORIZED)
    elif request.method == 'GET':
        films = Film.objects.filter(id_film=id)
        serializer = FilmSerializer(films, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['DELETE'])
# @authentication_classes([BasicAuthentication])
# @permission_classes([IsAuthenticated])
def delete(request, id):
    
        try:
            opinion = Film.objects.get(id=id)
            opinion.delete()
            return Response(opinion, status=status.HTTP_302_FOUND)
        except User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
