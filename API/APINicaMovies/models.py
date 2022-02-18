from ctypes import Array
from django.db import models

# Create your models here.

#For security reasons, allow reasonable and even plus max length 

class User(models.Model):
    id_user=models.CharField(max_length=80, primary_key=True)
    email=models.CharField(max_length=80)
    password=models.CharField(max_length=80)
    token:models.CharField(max_length=80)
    

#I'll just save comments and new overviews. The rest of film info will come from external API. So I'll connect id film to external API id film to get all native comments. It's a simple DB for testing so if later on we wish to make relationships for mapping and bringing all MyUser's comments or turn it more like a social media, we should clearly make changes in this prototype.
class Film(models.Model):
    id_film=models.CharField(max_length=20)    
    comment=models.TextField()
    review=models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)