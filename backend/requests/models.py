from django.db import models
from engineers.models import EngineerType
from projects.models import Projects
from django.utils import timezone

class EngineerDetails(models.Model):
  created_at = models.DateTimeField(auto_now_add=timezone.now)
  updated_at = models.DateTimeField(auto_now=timezone.now)
  engineer_type = models.ForeignKey(EngineerType, on_delete=models.CASCADE)
  quantity = models.IntegerField(default=0)

class EngineerRequests(models.Model):
  ENGINEER_REQUEST_STATUS_CHOICES = [
    ("AC", "Active"),
    ("CO", "Completed"),
    ("CA", "Cancelled"),
    ("OH", "On hold")
  ]
  created_at = models.DateTimeField(auto_now_add=timezone.now)
  updated_at = models.DateTimeField(auto_now=timezone.now)
  project = models.ForeignKey(Projects, on_delete=models.CASCADE)
  status = models.CharField(max_length=5, choices=ENGINEER_REQUEST_STATUS_CHOICES)
  engineer_details = models.ForeignKey(EngineerDetails, on_delete=models.CASCADE)