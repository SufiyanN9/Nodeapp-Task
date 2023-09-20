pipeline{
    agent {label 'Jenkins-app-slave'}
    
    environment {
        DOCKERHUB_CREDENTIALS=credentials('docker-id')
    }
    
    stages {
        stage('git checkout'){
            steps{
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: 'jenkins-slave-node', url: 'https://github.com/SufiyanN9/Nodeapp-Task.git']])
            }
        }
        stage('Build'){
            steps{
                script {
                dockerImageName = "mynodeapp:${BUILD_NUMBER}"
                docker.build(dockerImageName, '-f Dockerfile .')
            }
            }
        }
        stage('Login'){
            steps{
                sh 'echo $DOCKERHUB_CREDENTIAL_PSW | docker login -u $DOCKERHUB-CREDENTIALS_USR --password-stdin'
            }
        }
        stage('Push'){
            steps{
                sh 'docker push sufiyann9/mynodeapp'
            }
        }
    }
}