from django.db import models
from engineers.models import Engineers
from projects.models import Projects
from django.utils import timezone

class ProjectQuotations(models.Model):
  created_at = models.DateTimeField(auto_now_add=timezone.now)
  updated_at = models.DateTimeField(auto_now=timezone.now)
  engineers = models.ManyToManyField(Engineers)
  project_id = models.ForeignKey(Projects, on_delete=models.CASCADE)
  engineer_total_amount = models.FloatField(default=0.0)
  added_computation_value = models.IntegerField(default=0)
  total = models.IntegerField(default=0)