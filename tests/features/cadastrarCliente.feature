Feature: : Cadastro de cliente no portal da loja Ponto Frio
   Como novo cliente do portal da loja Ponto Frio
   Eu desejo realizar meu cadastro no portal
   Para que eu possa finalizar minha compra com sucesso 

    Scenario: Cadastrar pessoa Física no portal
        Given eu estou na página de identificação do portal
        When eu preencho os dados pessoais obrigatórios do cadastro
        And eu preencho os dados obrigatórios de acesso ao Ponto Frio
        Then eu sou redirecionada página principal