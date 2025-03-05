from django.db import models
from django.contrib.auth.models import User
from django.core.validators import EmailValidator
from django.contrib.auth.hashers import make_password
from rest_framework.authtoken.models import Token

class AppUser(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)  # This links to the User model, which has a username field
    email = models.EmailField(unique=True, validators=[EmailValidator(message="Please enter a valid email address")])
    password = models.CharField(max_length=255)
    profile_picture = models.ImageField(upload_to="profile_pics/", null=True, blank=True)

    def __str__(self):
        return self.user.username