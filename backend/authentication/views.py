from django.contrib.auth import authenticate
from rest_framework import generics, status, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer
from .models import User

class RegisterView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# class LoginView(viewsets.ModelViewSet):
#     def post(self, request):
#         email = request.data.get('email')
#         password = request.data.get('password')
#         user = authenticate(request, username=email, password=password)
#         if user is not None:
#             return Response({'message': 'Login Successful'})
#         return Response({'error': 'Invalid Credentials'}, status=status.HTTP_400_BAD_REQUEST)


# class LoginView(viewsets.ModelViewSet):
#     serializer_class = UserSerializer

#     def post(self, request, *args, **kwargs):
#         serializer = self.serializer_class(data=request.data)
#         if serializer.is_valid():
#             email = serializer.validated_data['email']
#             password = serializer.validated_data['password']
#             user = authenticate(username=email, password=password)
#             if user:
#                 return Response({'message': 'Login successful'})
#             else:
#                 return Response({'error': 'Invalid credentials'}, status=400)
#         else:
#             return Response(serializer.errors, status=400)

class LoginView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']
            user = authenticate(username=email, password=password)
            if user:
                # Aqui você pode implementar a lógica de login (por exemplo, criar um token)
                return Response({'message': 'Login successful'})
            else:
                return Response({'error': 'Invalid credentials'}, status=400)
        else:
            return Response(serializer.errors, status=400)