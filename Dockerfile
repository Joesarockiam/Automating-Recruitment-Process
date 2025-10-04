# Use an official Python runtime as a parent image
FROM python:3.11-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Create and set working directory
WORKDIR /app

# Install dependencies
COPY requirements.txt /app/
RUN pip install --upgrade pip \
    && pip install -r requirements.txt

# Copy project files
COPY . /app/

# Expose port (Flask default)
EXPOSE 5000

# Health check (optional)
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s \
  CMD curl --fail http://localhost:5000/ || exit 1

# Command to run the app
CMD ["python", "app.py"]
