from django.db import models
from django.utils import timezone

class Projects(models.Model):
  PROJECT_STATUS_CHOICES = [
    ("AC", "Active"),
    ("CO", "Completed"),
    ("CA", "Cancelled"),
    ("OH", "On hold")
  ]
  created_at = models.DateTimeField(auto_now_add=timezone.now)
  updated_at = models.DateTimeField(auto_now=timezone.now)
  name = models.CharField(max_length=255)
  description = models.TextField(max_length=1000)
  number_of_engineers = models.IntegerField()
  status = models.CharField(max_length=5, choices=PROJECT_STATUS_CHOICES, default="OH")