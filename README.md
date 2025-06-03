# Orion Web Project

Веб-сайт компании Orion, разработанный с использованием современных технологий.

## Технологии

### Frontend
- Vue.js 3
- TypeScript
- Tailwind CSS
- Vite

### Backend
- Django
- Django REST Framework
- Gunicorn
- Nginx

## Установка и запуск

### Требования
- Docker
- Docker Compose

### Локальная разработка

1. Клонируйте репозиторий:
```bash
git clone https://github.com/vladmelevich/orion_go_start.git
cd orion_go_start
```

2. Создайте файл .env в корневой директории:
```bash
cp .env.example .env
# Отредактируйте .env файл, добавив необходимые переменные окружения
```

3. Запустите проект:
```bash
docker-compose up -d
```

### Production развертывание

1. Настройте сервер:
```bash
# Установка Docker и Docker Compose
sudo apt update
sudo apt install docker.io docker-compose
sudo systemctl enable docker
sudo systemctl start docker
```

2. Склонируйте репозиторий на сервер:
```bash
git clone https://github.com/vladmelevich/orion_go_start.git
cd orion_go_start
```

3. Создайте и настройте .env файл:
```bash
cp .env.example .env
# Отредактируйте .env файл для production окружения
```

4. Запустите проект:
```bash
docker-compose -f docker-compose.yml up -d --build
```

## Структура проекта

```
orion_go_start/
├── backend/                 # Django backend
│   ├── orion_backend/      # Основной проект Django
│   ├── forms/             # Приложение для обработки форм
│   └── Dockerfile         # Dockerfile для backend
├── ORION WEB/             # Frontend приложение
│   ├── src/              # Исходный код Vue.js
│   ├── public/           # Статические файлы
│   └── Dockerfile        # Dockerfile для frontend
├── docker-compose.yml     # Конфигурация Docker Compose
└── nginx.conf            # Конфигурация Nginx
```

## Лицензия

MIT 