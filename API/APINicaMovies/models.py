from django.utils import timezone
from django.db import models

# Create your models here.

#For security reasons, allow reasonable and even plus max length 

class User(models.Model):
    username=models.EmailField(max_length=80, unique=True, null=False, primary_key=True)
    password=models.CharField(max_length=80, null=False)

    

#I'll just save comments and new overviews. The rest of film info will come from external API. So I'll connect id film to external API id film to get all native comments. It's a simple DB for testing so if later on we wish to make relationships for mapping and bringing all MyUser's comments or turn it more like a social media, we should clearly make changes in this prototype.


class Film(models.Model):
    id_film=models.CharField(max_length=20)    
    comment=models.TextField(null=True)
    review=models.TextField(null=True)
    date=models.CharField(max_length=30, null=False)
    username=models.CharField(max_length=80, null=False)