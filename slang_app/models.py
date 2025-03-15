from django.db import models

# Create your models here.
class SlangWord(models.Model):
    term = models.CharField(max_length=100, unique=True)
    definition = models.TextField()

    def __str__(self):
        return self.term
