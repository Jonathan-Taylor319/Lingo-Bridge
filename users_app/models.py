from django.db import models
from django.core.validators import EmailValidator
from django.contrib.auth.hashers import make_password, check_password

# Create your models here.
class UserProfile(models.Model):
    username = models.CharField(max_length=25, unique=True)
    email = models.EmailField(max_length=255, unique=True, validators=[EmailValidator("Enter a valid email address")])
    password = models.CharField(max_length=255)

    #function to take password when created or updated to hash it for security will need to use check_password for login
    def save(self, *args, **kwargs):
        if not self.pk or not check_password(self.password, getattr(UserProfile.objects.filter(pk=self.pk).first(), "password", "")):
            self.password = make_password(self.password)
        super().save(*args, **kwargs)

    def __str__(self):
        return f"\n{self.username}\n{self.email}"