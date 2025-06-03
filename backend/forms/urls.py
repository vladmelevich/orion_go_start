from django.urls import path
from . import views

urlpatterns = [
    path('api/contact/', views.submit_contact_form, name='submit_contact_form'),
    path('api/service-request/', views.submit_service_request, name='submit_service_request'),
    path('api/service-types/', views.get_service_types, name='get_service_types'),
] 