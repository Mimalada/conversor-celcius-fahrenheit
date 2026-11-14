
pipeline {
    agent any

    stages {
        stage('Verificar Node.js') {
            steps {
                bat 'node --version'
            }
        }

        stage('Executar testes') {
            steps {
                bat 'node teste.js'
            }
        }
    }

    post {
        success {
            echo 'Todos os testes passaram!'
        }

        failure {
            echo 'Falha na execução dos testes!'
        }
    }
}
