pipeline {
    agent any
    options {
        timeout(time: 1, unit: 'HOURS') 
    }
    environment {
        BASE_URL = 'http://my-predefined-username-password'
    }
    stages {
        stage("Build") {
            steps {
               echo "npm install"  
               echo "npm run build"  
            }
        }
        stage("Deploy") {
            steps {
                echo "deploying to go daddy"   
                echo "WP:${WORKSPACE}"
                echo "URL:${BASE_URL}"
                sh "cp -r ${WORKSPACE}/build C:/Inetpub/BizERP1_Sln/"            
            }
        }
    }
}