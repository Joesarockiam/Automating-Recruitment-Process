pipeline {
    agent any

    environment {
        REGISTRY = "docker.io/joesarockiam"
        IMAGE_NAME = "automating-recruitment-process"
        IMAGE_TAG = "${BUILD_NUMBER}"
        FULL_IMAGE = "${REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG}"
        REGISTRY_CREDENTIALS = "docker-hub-credentials"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build with Maven') {
            steps {
                bat 'mvn clean package -DskipTests'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'mvn test'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${FULL_IMAGE}")
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
            echo "✅ Build and Push successful!"
        }
        failure {
            echo "❌ Build failed!"
        }
    }
}
