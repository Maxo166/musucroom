from django.urls import path
from .views import CreateRoomView, RoomView

urlpatterns = [
    path('', RoomView.as_view(), name='list_rooms'),
    path('room/', RoomView.as_view(), name='list_rooms'),
    path('room/create', CreateRoomView.as_view(), name='create_room'),
]
