from django.shortcuts import render
from .serializers import EngineersSerializer, EngineerTypeSerializer
from .models import Engineers, EngineerType
from rest_framework import permissions, viewsets

class EngineersViewSet(viewsets.ModelViewSet):
  """
    A viewset for viewing and editing engineers.
  """
  queryset = Engineers.objects.all()
  serializer_class = EngineersSerializer
  permission_classes = [permissions.IsAuthenticated]

class EngineerTypeViewSet(viewsets.ModelViewSet):
  """
    A viewset for viewing and editing engineers types.
  """
  queryset = EngineerType.objects.all()
  serializer_class = EngineerTypeSerializer
  permission_classes = [permissions.IsAuthenticated]