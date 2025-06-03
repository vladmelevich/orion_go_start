from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view, throttle_classes
from rest_framework.response import Response
from django.views.decorators.cache import cache_page
from django.core.cache import cache
from django.core.mail import send_mail
from django.conf import settings
import asyncio
from rest_framework.throttling import AnonRateThrottle, UserRateThrottle

# Create your views here.

async def send_email_async(subject, message, from_email, recipient_list):
    """Асинхронная отправка email"""
    loop = asyncio.get_event_loop()
    await loop.run_in_executor(
        None,
        lambda: send_mail(
            subject=subject,
            message=message,
            from_email=from_email,
            recipient_list=recipient_list,
            fail_silently=False,
        )
    )

@api_view(['POST'])
@throttle_classes([AnonRateThrottle, UserRateThrottle])
async def submit_contact_form(request):
    """Асинхронная обработка контактной формы с кэшированием"""
    try:
        form_data = request.data
        
        # Проверяем кэш на наличие дубликатов
        cache_key = f"contact_form_{form_data.get('email')}_{form_data.get('phone')}"
        if cache.get(cache_key):
            return Response(
                {'success': False, 'message': 'Пожалуйста, подождите перед повторной отправкой'},
                status=status.HTTP_429_TOO_MANY_REQUESTS
            )

        subject = 'Новая заявка с контактной формы'
        message = f"""
        Имя: {form_data.get('name', '')}
        Email: {form_data.get('email', '')}
        Телефон: {form_data.get('phone', '')}
        
        Сообщение:
        {form_data.get('message', '')}
        """
        
        # Отправляем email асинхронно
        await send_email_async(
            subject=subject,
            message=message,
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=[settings.EMAIL_HOST_USER]
        )

        # Кэшируем запрос на 5 минут для предотвращения спама
        cache.set(cache_key, True, timeout=300)
        
        return Response(
            {'success': True, 'message': 'Заявка успешно отправлена'},
            status=status.HTTP_200_OK
        )
    except Exception as e:
        return Response(
            {'success': False, 'message': str(e)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )

@api_view(['POST'])
@throttle_classes([AnonRateThrottle, UserRateThrottle])
async def submit_service_request(request):
    """Асинхронная обработка заявки на услугу с кэшированием"""
    try:
        request_data = request.data
        
        # Проверяем кэш на наличие дубликатов
        cache_key = f"service_request_{request_data.get('email')}_{request_data.get('phone')}"
        if cache.get(cache_key):
            return Response(
                {'success': False, 'message': 'Пожалуйста, подождите перед повторной отправкой'},
                status=status.HTTP_429_TOO_MANY_REQUESTS
            )

        subject = 'Новая заявка на услугу'
        message = f"""
        Имя: {request_data.get('name', '')}
        Email: {request_data.get('email', '')}
        Телефон: {request_data.get('phone', '')}
        Тип услуги: {request_data.get('service_type', '')}
        
        Описание проекта:
        {request_data.get('description', '')}
        """
        
        # Отправляем email асинхронно
        await send_email_async(
            subject=subject,
            message=message,
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=[settings.EMAIL_HOST_USER]
        )

        # Кэшируем запрос на 5 минут для предотвращения спама
        cache.set(cache_key, True, timeout=300)
        
        return Response(
            {'success': True, 'message': 'Заявка успешно отправлена'},
            status=status.HTTP_200_OK
        )
    except Exception as e:
        return Response(
            {'success': False, 'message': str(e)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )

@api_view(['GET'])
@cache_page(60 * 15)  # Кэшируем на 15 минут
def get_service_types(request):
    """Получение типов услуг с кэшированием"""
    service_types = {
        'web': 'Веб-разработка',
        'mobile': 'Мобильная разработка',
        'design': 'Дизайн',
        'other': 'Другое',
    }
    return Response(service_types)
