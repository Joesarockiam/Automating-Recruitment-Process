pipeline {
    agent any

    environment {
        // Docker registry credentials stored in Jenkins (credential ID)
        REGISTRY = "docker.io/joesarockiam"           // e.g. docker.io or your registry
        IMAGE_NAME = "automated-recruitment"
        IMAGE_TAG = "${env.BUILD_NUMBER}"
        FULL_IMAGE = "${REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG}"
        // Credentials for Docker registry
        REGISTRY_CREDENTIALS = "docker-registry-credentials-id"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'python3 -m venv venv'
                sh '. venv/bin/activate && pip install --upgrade pip && pip install -r requirements.txt'
            }
        }

        stage('Run Tests') {
            steps {
                // Adjust if using pytest, unittest, etc.
                sh '. venv/bin/activate && pytest --maxfail=1 --disable-warnings -q'
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
                    }
                }
            }
        }

        // Optional: tag “latest”
        stage('Tag Latest') {
            steps {
                script {
                    docker.withRegistry("https://${REGISTRY}", "${REGISTRY_CREDENTIALS}") {
                        docker.image("${FULL_IMAGE}").push("latest")
                    }
                }
            }
        }

        // Optional deployment or archive steps can go here
        stage('Deploy / Publish') {
            steps {
                echo "Deployment steps go here (e.g. Kubernetes, ECS, SSH, etc.)"
            }
        }
    }

    post {
        always {
            // Clean up workspace, Docker images, etc.
            cleanWs()
        }
        success {
            echo "Build succeeded: ${FULL_IMAGE}"
        }
        failure {
            echo "Build failed"
        }
    }
}
