from django.urls import path
from .views import redirect_after_login

urlpatterns = [
    path('redirect/', redirect_after_login, name='redirect_after_login'),
]