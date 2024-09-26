from django.shortcuts import render
from rest_framework.views import APIView
# Create your views here.
from .models import Student
from .serializers import StudentSerializer
from rest_framework.response import Response
from django.http import Http404
from rest_framework import status

class StudentView(APIView):
    def get(self,request,pk=None):
        if pk:
            try:
                student = Student.objects.get(studentId=pk)
            except Student.DoesNotExist:
                raise Http404("Student not found")
            serializer = StudentSerializer(student)
            return Response(serializer.data)
        else:
            students = Student.objects.all()
            serializer = StudentSerializer(students, many=True)
            return Response(serializer.data)
    
    def post(self, request, format=None):
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def put(self, request, pk, format=None):
        student = Student.objects.get(studentId=pk)
        serializer = StudentSerializer(student, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def delete(self, request, pk, format=None):
        student = Student.objects.get(studentId=pk)
        student.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    