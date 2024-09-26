from django.urls import path
from .views import StudentView
from . import views
urlpatterns =[
    path('student/', views.StudentView.as_view(), name='student-list'),
    path('student/<int:pk>/', views.StudentView.as_view(), name='student-detail'),
    path('student/', StudentView.as_view(), name='student-create'),

]