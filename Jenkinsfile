
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
                echo 'Executando testes...'

                bat(
                    returnStatus: true,
                    script: 'node --test --test-reporter=junit --test-reporter-destination=resultado.xml teste.js'
                )

                junit 'resultado.xml'
            }
        }
    }
}
