from django.urls import path
from .views import slang_list, random_slang, search_slang

urlpatterns = [
    path("api/slang/", slang_list, name="slang-list"),
    path("api/slang/random/", random_slang, name="random-slang"),
    path("api/slang/search/", search_slang, name="search-slang"),
]
