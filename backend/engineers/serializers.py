from rest_framework import serializers
from .models import Engineers, EngineerType

class EngineerTypeSerializer(serializers.ModelSerializer):
  class Meta:
    model = EngineerType
    fields = ('__all__')

class EngineersSerializer(serializers.ModelSerializer):
  engineer_type = EngineerTypeSerializer(read_only=True, source='engineer_type_id')

  class Meta:
    model = Engineers
    fields = ('__all__')
