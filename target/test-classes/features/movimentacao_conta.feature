#language: pt
@funcional

Funcionalidade: Crar movimentações

	Como um usuario que possui uma conta
	Eu quero criar movimentações financeiras
	
Contexto:
    Dado que desejo adicionar uma movimentacao

Esquema do Cenario: Adicionar movimentaco mensagem esperada "<mensagem>" descricao "<descricao>"
    Quando eu seleciono o tipo "<tipo>"
    E eu preencho a data da movimentacao "<dataMovimentacao>"
    E data do pagamento "<dataPagamento>"
    E descricao "<descricao>"
    E interessado "<interessado>"
    E valor "<valor>"
    E conta "<conta>"
    E situacao "<situacao>"
    Entao valido a mensagem "<mensagem>"
    
Exemplos:    
	|tipo|dataMovimentacao|dataPagamento|descricao|interessado|valor|conta|situacao|mensagem|
	|REC|17/04/2019|18/04/2019|Adicao teste aceitar|Adriano|1000|Conta para movimentacoes|status_pago|Movimentação adicionada com sucesso!|
	|DESP|02/02/2019|18/06/2019|Adicao aceitar2|Adriano c|2000|Conta para movimentacoes|status_pendente|Movimentação adicionada com sucesso!|
	|REC|02/02/2019|18/06/2019|Adicao aceitar3|Adriano c|2000|Conta para movimentacoes|status_pendente|Movimentação adicionada com sucesso!|
  |DESP|02/02/2019|18/06/201|Adicao erro1|Adriano c|2000|Conta para movimentacoes|status_pendente|Data da Movimentação inválida (DD/MM/YYYY)|
  |DESP|02/02/2019|18/6/2019|Adicao erro2|Adriano c|2000|Conta para movimentacoes|status_pendente|Data da Movimentação inválida (DD/MM/YYYY)| 
  |REC|02/02/2019|1/06/2019|Adicao erro3|Adriano c|2000|Conta para movimentacoes|status_pendente|Data da Movimentação inválida (DD/MM/YYYY)| 
  |DESP|02/02/019|18/06/2019|Adicao erro4|Adriano c|2000|Conta para movimentacoes|status_pendente|Data da Movimentação inválida (DD/MM/YYYY)| 
  |REC|02/0/2019|01/06/2019|Adicao erro5|Adriano c|2000|Conta para movimentacoes|status_pendente|Data da Movimentação inválida (DD/MM/YYYY)| 
  |DESP|0/02/2019|01/06/2019|Adicao erro6|Adriano c|2000|Conta para movimentacoes|status_pendente|Data da Movimentação inválida (DD/MM/YYYY)| 


