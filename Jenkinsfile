pipeline {
    agent any
    options {
        timeout(time: 1, unit: 'HOURS') 
    }
    environment {
        BASE_URL = 'http://my-predefined-username-password'
        MY_WORKSPACE = "C:/Users/finecopia/AppData/Local/Jenkins/.jenkins/workspace/study-next-app"
        MY_DESTINATION_PATH = "C:/Inetpub/BizERP1_Sln/"
    }
    stages {
        stage("Build") {
            steps {
               echo "npm install"  
               sh "npm install"
               echo "npm run build"  
               sh "npm run build"  
            }
        }
        stage("Deploy") {
            steps {
                echo "deploying to go daddy"   
                echo "WP:${WORKSPACE}"
                echo "MY-WP:${MY_WORKSPACE}"
                echo "URL:${BASE_URL}"
                sh "rm -rf ${MY_WORKSPACE}/.git"
                sh "cp -r ${MY_WORKSPACE} ${MY_DESTINATION_PATH}"               
            }
        }
    }
}