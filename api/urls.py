from rest_framework import routers
from .api import DriveViewSet

router = routers.DefaultRouter()
router.register('api/drive', DriveViewSet, 'drive')

urlpatterns = router.urls