from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db import models

# Trying to use user already in django but modified
class CustomUserManager(BaseUserManager):
    def create_user(self, email, username, password=None, **extra_fields):
        """Creates and returns a regular user with an email and password."""
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, username=username, **extra_fields)
        user.set_password(password)  # Hash the password
        user.save(using=self._db)
        return user


# Custom User Model (Basic Abstract User)
class CustomUser(AbstractBaseUser):
    email = models.EmailField(unique=True)  # Email must be unique
    username = models.CharField(max_length=150, unique=True)  # Username must be unique
    password = models.CharField(max_length=255)  # Password field

    objects = CustomUserManager()

    # Specifies the unique identifier for login
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']  # 'email' must be provided when creating a user

    def __str__(self):
        return self.username  # Return username when displaying the user object
