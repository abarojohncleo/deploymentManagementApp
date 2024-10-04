from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import EngineersViewSet, EngineerTypeViewSet

router = DefaultRouter()
router.register(r'engineers', EngineersViewSet)
router.register(r'engineers-type', EngineerTypeViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.