pipeline {
    agent any

    environment {
        REGISTRY = "docker.io/joesarockiam"
        IMAGE_NAME = "automating-recruitment"
        IMAGE_TAG = "${BUILD_NUMBER}"
        FULL_IMAGE = "${REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG}"
        REGISTRY_CREDENTIALS = "docker-hub-credentials" // Docker Hub credentials ID
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'python -m venv venv'
                bat 'venv\\Scripts\\pip install --upgrade pip'
                bat 'venv\\Scripts\\pip install -r requirements.txt'
            }
        }

        stage('Run Tests') {
            steps {
                // Only if you have tests, otherwise skip
                // bat 'venv\\Scripts\\pytest'
                echo "No tests to run"
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${FULL_IMAGE}", ".")
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry("https://${REGISTRY}", "${REGISTRY_CREDENTIALS}") {
                        docker.image("${FULL_IMAGE}").push()
                        docker.image("${FULL_IMAGE}").push("latest")
                    }
                }
            }
        }
    }

    post {
        success {
            echo "✅ Build & Docker Push successful!"
        }
        failure {
            echo "❌ Build failed!"
        }
    }
}
