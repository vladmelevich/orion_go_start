from celery import shared_task
from django.core.mail import send_mail
from django.conf import settings

@shared_task
def send_contact_form_email(form_data):
    subject = 'Новая заявка с контактной формы'
    message = f"""
    Имя: {form_data.get('name', '')}
    Email: {form_data.get('email', '')}
    Телефон: {form_data.get('phone', '')}
    
    Сообщение:
    {form_data.get('message', '')}
    """
    
    send_mail(
        subject=subject,
        message=message,
        from_email=settings.EMAIL_HOST_USER,
        recipient_list=[settings.EMAIL_HOST_USER],
        fail_silently=False,
    )

@shared_task
def send_service_request_email(request_data):
    subject = 'Новая заявка на услугу'
    message = f"""
    Имя: {request_data.get('name', '')}
    Email: {request_data.get('email', '')}
    Телефон: {request_data.get('phone', '')}
    Тип услуги: {request_data.get('service_type', '')}
    
    Описание проекта:
    {request_data.get('description', '')}
    """
    
    send_mail(
        subject=subject,
        message=message,
        from_email=settings.EMAIL_HOST_USER,
        recipient_list=[settings.EMAIL_HOST_USER],
        fail_silently=False,
    ) 