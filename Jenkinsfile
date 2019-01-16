pipeline {
    agent {
        docker {
            image 'marktest'
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
              sh './jenkins/scripts/kill.sh'
            }
        }
        stage('Deliver') {
            steps {
                sh './jenkins/scripts/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './jenkins/scripts/kill.sh'
            }
        }
    }
}
