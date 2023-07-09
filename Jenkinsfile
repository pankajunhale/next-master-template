pipeline {
     agent any
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
                sh 'cp -r ${WORKSPACE}/study-next-app/build C:/Inetpub/BizERP1_Sln/'            
            }
        }
    }
}