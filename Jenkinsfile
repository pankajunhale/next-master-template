pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
               sh "npm install"  
               sh "npm run build"  
            }
        }
        stage("Deploy") {
            steps {
                echo "deploying to go daddy"                
            }
        }
    }
}