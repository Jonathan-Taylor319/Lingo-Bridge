from django.urls import path, register_converter
from .views import AllUsers, SelectedUser
from .converters import IntOrStrConverter

register_converter(IntOrStrConverter, 'int_or_str')

urlpatterns = [
    path('', AllUsers.as_view(), name="all_users"),
    path('<int_or_str:id>/', SelectedUser.as_view(), name='selected_pokemon'),
]