from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from .models import SlangWord
import random

def slang_list(request):
    slang = list(SlangWord.objects.values("term", "definition"))
    return JsonResponse({"slang": slang})

def random_slang(request):
    slang = SlangWord.objects.order_by("?").first()
    if slang:
        return JsonResponse({"term": slang.term, "definition": slang.definition})
    return JsonResponse({"error": "No slang words available"}, status=404)

def search_slang(request):
    query = request.GET.get("q", "").strip().lower()
    slang = SlangWord.objects.filter(term__icontains=query).values("term", "definition")
    return JsonResponse({"results": list(slang)})
