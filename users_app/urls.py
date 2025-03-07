from django.urls import path
from .views import SignupView, GetUserView, UpdateUserView, DeleteUserView
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('signup/', SignupView.as_view(), name='signup'),
    path('get-user/', GetUserView.as_view(), name='get_user'),
    path('update-user/', UpdateUserView.as_view(), name='update_user'),
    path('delete-user/', DeleteUserView.as_view(), name='delete_user'),
    path('get-token/', obtain_auth_token, name='get_token'),  # For user authentication
]
