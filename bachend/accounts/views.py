from rest_framework_simplejwt.tokens import RefreshToken
from django.shortcuts import redirect
from django.conf import settings

def redirect_after_login(request):
    user = request.user

    if not user.is_authenticated:
        return redirect(settings.FRONTEND_URL)

    # Generate JWT
    refresh = RefreshToken.for_user(user)
    access_token = str(refresh.access_token)

    # Redirect to frontend with token
    return redirect(f'{settings.FRONTEND_URL}/auth/callback?access_token={access_token}')
