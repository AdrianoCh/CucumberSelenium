#language: pt
@unitario
Funcionalidade: Aprender Cucumber
	Como um aluno
	Eu quero aprender Cucumber
	Para que eu possa	automatizar crit�rios de aceitação
#nao é obrigatoria a descriçãoo acima, foi colocada so para dar um contexto

#criterios de aceitação e cenários

@esse
Cenario: Deve executar especificação
	Dado que criei o arquivo corretamente
	Quando executa-lo
	Entao a especificação deve executar com sucesso
	
Cenario: Deve incrementar contador
	Dado que o valor do contador é 15
	Quando eu acrescentar em 3
	Entao o valor deve ser 18
	
Cenario: Deve calcular atraso na entrega
	Dado que a entrega é dia 05/04/2018
	Quando a entrega atrasar em 2 dias 0 meses 0 anos
	Entao a entrega será efetuada em 07/04/2018
	
Cenario: Deve calcular atraso na entrega da China
	Dado que a entrega é dia 05/04/2018
	Quando a entrega atrasar em 0 dias 2 meses 0 anos
	Entao a entrega será efetuada em 05/06/2018
	
############	
Cenário: Deve criar steps genéricos para estes passos
    Dado que o ticket é AF345
    Dado que o valor da passagem é R$ 230,45
    Dado que o nome do passageiro é "Fulano da Silva"
    Dado que o telefone do passageiro é 9999-9999
    Quando criar os steps
    Então o teste vai funcionar

Cenário: Deve reaproveitar os steps "Dado" do cenário anterior
    Dado que o ticket é AB167
    Dado que o ticket especial é AB167
    Dado que o valor da passagem é R$ 1120,23
    Dado que o nome do passageiro é "Cicrano de Oliveira"
    Dado que o telefone do passageiro é 9888-8888

Cenário: Deve negar todos os steps "Dado" dos cenários anteriores
    Dado que o ticket é CD123
    Dado que o ticket é AG1234
    Dado que o valor da passagem é R$ 1.1345,56
    Dado que o nome do passageiro é "Beltrano Souza Matos de Alcântara Azevedo"
    Dado que o telefone do passageiro é 1234-5678
    Dado que o telefone do passageiro é 999-2223 	
	
######################

Esquema do Cenario: Deve dar condiçoes conforme tipo de aluguel
	Dado: um flime com estoque de 2 unidades
	E que o preço do aluguel seja R$ <preco>
	E que o tipo do aluguel seja <tipo>
	Quando alugar
	Entao o preço do alguel será R$ <valor>
	E a data de entrega será em <qtdDias> dias
	E a pontuação será de <pontuacao> pontos
	
Exemplos:
	|preco|  tipo   |valor|qtdDias|pontuacao|
	|  4  |extendido|  8  |   1   |    1    |
	|  4  |  comum  |  4  |   1   |    1    |
	|  10 |extendido|  20 |   3   |    2    |
	|  11 |  comum  |  3  |   7   |    5    |
	|  12 |extendido|  1  |   18  |    6    |
	|  13 |  comum  |  2  |   9   |    7    |
	
	