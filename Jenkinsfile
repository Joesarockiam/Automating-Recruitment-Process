pipeline {
    agent any

    environment {
        VENV = "${WORKSPACE}/venv"
        IMAGE_NAME = "automating-recruitment:local"
    }

    stages {

        stage('Checkout SCM') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat "python -m venv %VENV%"
                bat "%VENV%\\Scripts\\python.exe -m pip install --upgrade pip"
                bat "%VENV%\\Scripts\\pip install -r requirements.txt"
            }
        }

        stage('Run Tests') {
            steps {
                echo "No tests to run"
            }
        }

        stage('Build Docker Image') {
            steps {
                // Build locally and keep image on host
                bat "docker build --load -t %IMAGE_NAME% ."
            }
        }
    }

    post {
        success {
            echo "Build and Docker image creation successful!"
        }
        failure {
            echo "Build failed!"
        }
    }
}
