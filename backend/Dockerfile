# Use the official Python image from the Docker Hub
FROM python:3.8-alpine

# Set environment variables
ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1

# Set the working directory in the container
WORKDIR /app/backend

# Install system dependencies and build dependencies
RUN apk add --no-cache --virtual .build-deps \
        gcc \
        musl-dev \
        postgresql-dev \
        python3-dev \
        libffi-dev \
        openssl-dev \
        build-base && \
    apk add --no-cache \
        librdkafka-dev

# Copy the requirements file into the container
COPY requirements.txt /app/backend/

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Remove build dependencies
RUN apk del .build-deps && \
    rm -rf /var/cache/apk/* /tmp/*

# Copy the rest of the application code into the container
COPY . /app/backend/

# Specify the command to run the application
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
