#language: pt
@funcional
Funcionalidade: Cadastro de contas
  
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
    E seleciono Adicionar
    
Esquema do Cenario: Validar cadastro da conta "<conta>" com a mensagem esperada "<mensagem>"
	Quando informo a conta "<conta>"
	E seleciono Salvar
	Entao recebo a mensagem "<mensagem>"
	
Exemplos:
	|				conta    |             mensagem            |
	| Conta de Teste |  Conta adicionada com sucesso!  |
	|                |     Informe o nome da conta     |
	|Conta mesmo nome|Já existe uma conta com esse nome|
	

