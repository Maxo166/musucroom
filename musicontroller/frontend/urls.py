# from operator import index
from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('join', index),
    path('create', index),
    path('main', index),
    path('join/1', index)
]
