#language: pt
@funcional
Funcionalidade: Cadastro e edição de contas
  
  Como um usuário 
  Gostaria de cadastrar contas
  Para que eu possa distribuir meu dinheiro de uma forma mais organizada


Contexto:
    Dado que estou acessando a aplicação
    Quando informo o usuário "adrianochaves93@gmail.com"
    E a senha "18021995"
    E seleciono entrar
    Então visualizo a página inicial
    Quando seleciono Contas
    
Esquema do Cenario: Validar cadastro da conta "<conta>" com a mensagem esperada "<mensagem>"
	Quando seleciono Adicionar
	E informo a conta "<conta>"
	E seleciono Salvar
	Entao recebo a mensagem "<mensagem>"
	
Exemplos:
	|				conta    |             mensagem            |
	| Conta de Teste |  Conta adicionada com sucesso!  |
	|                |     Informe o nome da conta     |
	|Conta mesmo nome|Já existe uma conta com esse nome|
	
Esquema do Cenario:  Validar edicao da conta "<conta>" com a mensagem esperada "<mensagem>"
	Quando seleciono Listar
	E clico em editar
	E informo o novo nome "<nome>" da conta
	E clico em salvar
	Entao recebo a mensagem "<mensagem>"

Exemplos:
	|			nome			|					mensagem				 |
	|Conta alterada	|Conta alterada com sucesso|
	|               |Informe o nome da conta   |
	
Cenario:
		Quando seleciono Listar
	
	