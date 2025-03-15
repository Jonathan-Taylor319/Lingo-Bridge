import requests
from django.core.management.base import BaseCommand
from bs4 import BeautifulSoup
from slang_app.models import SlangWord 

class Command(BaseCommand):
    help = "Fetches Gen Z slang from Wikipedia and stores it in the database"

    def handle(self, *args, **kwargs):
        url = "https://en.wikipedia.org/w/api.php"
        params = {
            "action": "parse",
            "format": "json",
            "page": "Glossary_of_Generation_Z_slang",
            "origin": "*",
        }

        response = requests.get(url, params=params)
        if response.status_code != 200:
            self.stdout.write(self.style.ERROR("Failed to fetch data"))
            return

        data = response.json()
        raw_html = data["parse"]["text"]["*"]
        soup = BeautifulSoup(raw_html, "html.parser")

        terms = [dt.get_text() for dt in soup.select("dl dt")]
        definitions = [dd.get_text() for dd in soup.select("dl dd")]

        # Store in DB
        SlangWord.objects.all().delete()  # Clear existing slang words
        slang_objects = [
            SlangWord(term=term, definition=definitions[i] if i < len(definitions) else "No definition available")
            for i, term in enumerate(terms)
        ]
        SlangWord.objects.bulk_create(slang_objects)

        self.stdout.write(self.style.SUCCESS(f"Successfully added {len(slang_objects)} slang terms!"))
