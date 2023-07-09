pipeline {
    agent any
    options {
        timeout(time: 1, unit: 'HOURS') 
    }
    environment {
        BASE_URL = 'http://my-predefined-username-password'
        MY_WORKSPACE = "${WORKSPACE}/build"
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
                echo "MY-WP:${MY_WORKSPACE}"
                echo "URL:${BASE_URL}"                
            }
        }
    }
}