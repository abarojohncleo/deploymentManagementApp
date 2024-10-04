from django.db import models
from django.utils import timezone

class EngineerType(models.Model):
  POSITION_CHOICES = [
    ("FE", "Frontend Dev"),
    ("BE", "Backend Dev"),
    ("FS", "Full Stack Dev"),
    ("DO", "Dev Ops Engineer"),
    ("CE", "Cloud Engineer"),
  ]
  position = models.CharField(max_length=5, choices=POSITION_CHOICES)

class Engineers(models.Model):
  created_at = models.DateTimeField(auto_now_add=timezone.now)
  updated_at = models.DateTimeField(auto_now=timezone.now)
  first_name = models.CharField(max_length = 100)
  middle_name = models.CharField(max_length = 100)
  last_name = models.CharField(max_length = 100)
  address = models.CharField(max_length = 100)
  email = models.EmailField(max_length = 100, unique=True)
  contact_num = models.CharField(null=False, blank=False, unique=True)
  engineer_type_id = models.ForeignKey(EngineerType, on_delete=models.CASCADE)
  salary = models.FloatField(null=True, blank=True, default=None)