from rest_framework.views import APIView, Response
from .models import User_Account
from django.core.serializers import serialize
import json

# Create your views here.
class AllUsers(APIView):
    def get(self, request):
        user = User_Account.objects.order_by("user_name")
        serialized_user = serialize("json", user)
        json_user = json.loads(serialized_user)
        return Response(json_user)
    