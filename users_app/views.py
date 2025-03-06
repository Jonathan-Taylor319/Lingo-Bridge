from django.shortcuts import render
from rest_framework.views import APIView, Response
from django.core.serializers import serialize
from .models import UserProfile
import json

# Create your views here.

class UserProfile(APIView):
    pass