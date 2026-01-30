from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
# Create your views here.
from rest_framework.generics import CreateAPIView
from .serializers import RegisterSerializer
from rest_framework import status

class RegisterView(CreateAPIView):
    serializer_class = RegisterSerializer
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({
            "status": True,
            "message": "User registered successfully.",
            "data": {
                "id": user.id,
                "username": user.username,
                "email": user.email,
                "phone": user.phone
                },
            "errors": None
        }, status=status.HTTP_201_CREATED)

        else:
            return Response({
            "status": False,
            "message": "User registration failed.",
            "data": None,
            "errors": serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)
        
    


   