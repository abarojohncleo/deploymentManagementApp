from django.db import models
from projects.models import Projects
from engineers.models import Engineers
from django.utils import timezone

class Roster(models.Model):
  ROSTER_STATUS_CHOICES = [
    ('Ac', 'Active'),
    ('In', 'Inactive'),
    ('Can', 'Cancelled'),
    ('Com', 'Completed'),
    ('On', 'On hold')
  ]
  created_at = models.DateTimeField(auto_now_add=timezone.now)
  updated_at = models.DateTimeField(auto_now=timezone.now)
  project = models.ForeignKey(Projects, on_delete=models.CASCADE)
  engineer = models.ForeignKey(Engineers, on_delete=models.CASCADE)
  status = models.CharField(max_length= 5, choices = ROSTER_STATUS_CHOICES)
  duration = models.DurationField()
  
