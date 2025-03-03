from django.urls import path
from .views import AllUsers

urlpatterns = [
    path('', AllUsers.as_view(), name="all_users")
]