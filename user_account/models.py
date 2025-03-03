from django.db import models

# Create your models here.
class User_Account(models.Model):
    user_name = models.CharField(max_length=20)