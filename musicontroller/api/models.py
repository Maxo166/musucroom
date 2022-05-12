import random
import string
from django.db import models
from django.urls import reverse


def generate_unique_code():
    length = 6
    while True:
        code = ''.join(random.choices(string.ascii_uppercase, k=length))
        if Room.objects.filter(code=code).count == 0:
            break

# Create your models here.


class Room(models.Model):
    code = models.CharField(max_length=8, unique=True, default="")
    host = models.CharField(unique=True, max_length=50)
    guest_can_pause = models.BooleanField(null=False, default=False)
    votes_to_skip = models.IntegerField(null=False, default=1)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("Room_detail", kwargs={"pk": self.pk})
