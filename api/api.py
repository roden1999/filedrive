from django.shortcuts import render
from django.http import JsonResponse

from .models import Drive
from rest_framework import viewsets, permissions

from .serializers import DriveSerializer

# Client Viewset  -  Allows to create full CRUD api without having to specify explicit method for the functionality
class DriveViewSet(viewsets.ModelViewSet):
    queryset = Drive.objects.all().order_by("Name")
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = DriveSerializer

    def post(self, request, *args, **kwargs):
        image = request.data['Image']
        Drive.objects.create(image=image)