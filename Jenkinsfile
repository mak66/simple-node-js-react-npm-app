pipeline {
    agent {
        docker {
            image 'msnode7chrome:latest'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh './jenkins/scripts/test.sh'
                publishHTML target: [
                allowMissing: false,
                alwaysLinkToLastBuild: false,
                keepAll: true,
                reportDir: 'coverage',
                reportFiles:'index.html',
                reportName: 'RCov report'
                ]
            }
        }
        stage('Test Accessability') {
            steps {
              sh './jenkins/scripts/deliver.sh'
              sh 'npm run lighthouse:ci'
              publishHTML (target: [
                allowMissing: false,
                alwaysLinkToLastBuild: false,
                keepAll: true,
                reportDir: './lighthouse/',
                reportFiles: 'lighthouse-report.html',
                reportName: "Lighthouse"
              ])
              sh 'npm run test-pa11y'
              sh './jenkins/scripts/kill.sh'
            }
        }
        stage('Deliver') {
            steps {
                sh './jenkins/scripts/deliver.sh'
                sh 'cat .pidfile'
                sh 'ps -ef | grep npm'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh 'ps -ef | grep npm'
                sh './jenkins/scripts/kill.sh'
                sh 'ps -ef | grep npm'
            }
        }
    }
    post {
        always {
            echo 'One way or another, I have finished'
            deleteDir() /* clean up our workspace */
        }
        success {
            echo 'I succeeeded!'
        }
        unstable {
            echo 'I am unstable :/'
        }
        failure {
            echo 'I failed :('
        }
        changed {
            echo 'Things were different before...'
        }
    }
}
