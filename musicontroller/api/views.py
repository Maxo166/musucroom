from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import generics
from .Serializers import RoomSerializer
from api.models import Room


# Create your views here.
class CreateRoomView(generics.CreateAPIView):
    queryset = Room.objects.all().order_by('-created_at')
    serializer_class = RoomSerializer


class RoomView(generics.ListAPIView):
    queryset = Room.objects.all().order_by('-created_at')
    serializer_class = RoomSerializer
