
pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Verificando sintaxe do codigo...'
                bat 'node --check converter_temp.js'
                bat 'node --check teste.js'
            }
        }

        stage('Testes') {
            steps {
                echo 'Executando testes e gerando relatorio JUnit...'

                bat 'node --test --test-reporter=junit --test-reporter-destination=resultado.xml teste.js'

                junit 'resultado.xml'
            }
        }

        stage('Cobertura') {
            steps {
                echo 'Calculando cobertura de codigo...'

                bat 'node --test --experimental-test-coverage teste.js'
            }
        }
    }
}
