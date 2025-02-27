from django.shortcuts import render
from rest_framework.views import APIView, Response
from .models import User_Account
from django.core.serializers import serialize
import json

# Create your views here.
class AllUsers(APIView):
    def post(self, request):
        new_user = User_Account.objects.create(**request.data)



    def get(self, request):
        users = User_Account.objects.order_by("username") 
        serialized_users = serialize("json", users)
        json_users = json.loads(serialized_users)
        return Response(json_users)

    # def get(self, request, id):
    #     user = self.get_user(id)
    #     json_user = serialize('json', [user])
    #     serialized_user = json.loads(json_user)
    #     return Response(serilaized_user)

    # def post(self, request):
    #     new_user = User_Account.objects.create(**request.data)
    #     new_user = save()
    #     # new_user = full_clean()
    #     new_user = json.loads(serialize('json', [new_user]))
    #     return Response(new_user)