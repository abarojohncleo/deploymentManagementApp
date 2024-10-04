from django.db import models
from django.utils import timezone

class BusinessPartnersContactPersonnel(models.Model):
  created_at = models.DateTimeField(auto_now_add=timezone.now)
  updated_at = models.DateTimeField(auto_now=timezone.now)
  first_name = models.CharField(max_length = 100)
  middle_name = models.CharField(max_length = 100)
  last_name = models.CharField(max_length = 100)
  address = models.CharField(max_length = 100)
  email = models.EmailField(max_length = 100, unique=True)
  contact_num = models.CharField(null=False, blank=False, unique=True)

class BusinessPartners(models.Model):
  created_at = models.DateTimeField(auto_now_add=timezone.now)
  updated_at = models.DateTimeField(auto_now=timezone.now)
  name = models.CharField(max_length=255)
  address=models.CharField(max_length=255)
  business_partner_contact_personnel_id= models.ForeignKey(BusinessPartnersContactPersonnel, on_delete=models.CASCADE)