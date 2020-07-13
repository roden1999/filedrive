from django.db import models
from django.utils import timezone

# Create your models here.
class Drive(models.Model):
    Name = models.CharField(max_length=200, blank=False)
    Type = models.IntegerField(default=0, blank=False)
    RawFile = models.CharField(max_length=200, blank=False)
    Description = models.CharField(max_length=100, blank=True)
    Size = models.IntegerField(default=0, blank=False)
    Favorite = models.IntegerField(default=0, blank=False)
    Date = models.DateField(null=True, blank=False)
    ModifiedDate = models.DateField(null=True, blank=False)
    # Image = models.ImageField(default="default.jpg", null=True, blank=True, upload_to="")

    def __str__(self):
        return self.Name