Feature: : Adicionar produto no carrinho de compras da loja Ponto Frio
   Como cliente do portal da loja Ponto Frio
   Eu desejo adicionar um produto no meu carrinho de compras
   Para que eu possa realizar minha compra com sucesso 

    Scenario: Adicionar produto no carrinho sem logar
        Given eu estou na tela principal da pagina inicial
        When eu realizo a pesquisa do produto desejado "Pipoqueira Elétrica"
        And eu seleciono o produtos pelas especificações desejadas
        And eu calculo o frete de acordo com o meu CEP "04188-112"
        And eu vizualizo as formas de pagamento
        And eu vizualizo meu produto no carrinnho de compra
        And eu clico em concluir a minha compra
        And eu realizo o meu cadastro
        Given eu estou na página de identificação do portal
        When eu preencho os dados pessoais obrigatórios do cadastro
        And eu preencho os dados obrigatórios de acesso ao Ponto Frio
        And eu preencho os dados de endereço
        And eu preenho os dados de pagamento
        Then eu recebo a confirmação da compra do produto desejado
