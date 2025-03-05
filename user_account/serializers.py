from rest_framework import serializers
from django.contrib.auth.models import User
from .models import AppUser

class AppUserSerializer(serializers.ModelSerializer):
    username = serializers.CharField(required=True)
    email = serializers.EmailField(required=True)
    profile_picture = serializers.ImageField(required=False)

    class Meta:
        model = AppUser
        fields = ["username", "email", "profile_picture"]

class SignupSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True)
        
    class Meta:
        model = User  
        fields = ["username", "email", "password", "profile_picture"]

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = AppUser(**validated_data) 
        user.set_password(password)  # This handles password hashing
        user.save()
        return user

class UpdateSerializer(serializers.ModelSerializer):
    username = serializers.CharField(required=True)
    email = serializers.EmailField(required=True)
    password = serializers.CharField(write_only=True, required=False)  # Password is optional for update
    profile_picture = serializers.ImageField(required=False)

    class Meta:
        model = User
        fields = ["username", "email", "password", "profile_picture"]
