from rest_framework import serializers
from .models import Engineers, EngineerType

class EngineersSerializer(serializers.ModelSerializer):
  class Meta:
    model = Engineers
    fields = ('__all__')

class EngineerTypeSerializer(serializers.ModelSerializer):
  class Meta:
    model = EngineerType
    fields = ('__all__')