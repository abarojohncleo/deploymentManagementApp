from django.db import models

# Create your models here.
class EngineerType(model.Model):
  POSITION_CHOICES ={
    "FS" = "Full Stack Developer",
    "BE" = "Back End Developer",
    "FE" = "Front End Developer",
    "DO" = "Dev Ops Engineer",
    "AI" = "Artificial Intelligence Engineer",
    "ML" = "Machine Learning Engineer",
    "CE" =" Cloud Engineer",
  }

  position = models.Charfield(max_length=5, choices=POSITION_CHOICES)
  salary = models.FloatField()