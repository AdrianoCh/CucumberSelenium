$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/aprender_cucumber.feature");
formatter.feature({
  "name": "Aprender Cucumber",
  "description": "\tComo um aluno\n\tEu quero aprender Cucumber\n\tPara que eu possa\tautomatizar crit�rios de aceitação",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@unitario"
    }
  ]
});
formatter.scenario({
  "name": "Deve executar especificação",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@unitario"
    },
    {
      "name": "@esse"
    }
  ]
});
formatter.step({
  "name": "que criei o arquivo corretamente",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.que_criei_o_arquivo_corretamente()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "executa-lo",
  "keyword": "Quando "
});
formatter.match({
  "location": "AprenderCucumberSteps.executa_lo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a especificação deve executar com sucesso",
  "keyword": "Entao "
});
formatter.match({
  "location": "AprenderCucumberSteps.a_especificação_deve_executar_com_sucesso()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve incrementar contador",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@unitario"
    }
  ]
});
formatter.step({
  "name": "que o valor do contador é 15",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOValorDoContadorÉ(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acrescentar em 3",
  "keyword": "Quando "
});
formatter.match({
  "location": "AprenderCucumberSteps.euAcrescentarEm(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o valor deve ser 18",
  "keyword": "Entao "
});
formatter.match({
  "location": "AprenderCucumberSteps.oValorDeveSer(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve calcular atraso na entrega",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@unitario"
    }
  ]
});
formatter.step({
  "name": "que a entrega é dia 05/04/2018",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.queAEntregaÉDia(Integer,Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a entrega atrasar em 2 dias 0 meses 0 anos",
  "keyword": "Quando "
});
formatter.match({
  "location": "AprenderCucumberSteps.aEntregaAtrasarEmDoisDias(Integer,Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a entrega será efetuada em 07/04/2018",
  "keyword": "Entao "
});
formatter.match({
  "location": "AprenderCucumberSteps.aEntregaSeráEfetuadaEm(int,int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve calcular atraso na entrega da China",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@unitario"
    }
  ]
});
formatter.step({
  "name": "que a entrega é dia 05/04/2018",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.queAEntregaÉDia(Integer,Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a entrega atrasar em 0 dias 2 meses 0 anos",
  "keyword": "Quando "
});
formatter.match({
  "location": "AprenderCucumberSteps.aEntregaAtrasarEmDoisDias(Integer,Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a entrega será efetuada em 05/06/2018",
  "keyword": "Entao "
});
formatter.match({
  "location": "AprenderCucumberSteps.aEntregaSeráEfetuadaEm(int,int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve criar steps genéricos para estes passos",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@unitario"
    }
  ]
});
formatter.step({
  "name": "que o ticket é AF345",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOTicketÉAF(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o valor da passagem é R$ 230,45",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOValorDaPassagemÉR$(Double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o nome do passageiro é \"Fulano da Silva\"",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.queONomeDoPassageiroÉ(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o telefone do passageiro é 9999-9999",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOTelefoneDoPassageiroÉ(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "criar os steps",
  "keyword": "Quando "
});
formatter.match({
  "location": "AprenderCucumberSteps.criarOsSteps()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o teste vai funcionar",
  "keyword": "Então "
});
formatter.match({
  "location": "AprenderCucumberSteps.oTesteVaiFuncionar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve reaproveitar os steps \"Dado\" do cenário anterior",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@unitario"
    }
  ]
});
formatter.step({
  "name": "que o ticket é AB167",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOTicketÉAB(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o ticket especial é AB167",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOTicketEspecialÉAB(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o valor da passagem é R$ 1120,23",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOValorDaPassagemÉR$(Double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o nome do passageiro é \"Cicrano de Oliveira\"",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.queONomeDoPassageiroÉ(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o telefone do passageiro é 9888-8888",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOTelefoneDoPassageiroÉ(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve negar todos os steps \"Dado\" dos cenários anteriores",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@unitario"
    }
  ]
});
formatter.step({
  "name": "que o ticket é CD123",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOTicketÉCD(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o ticket é AG1234",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOTicketÉAG(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o valor da passagem é R$ 1.1345,56",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOValorDaPassagemÉR$(Double,Double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o nome do passageiro é \"Beltrano Souza Matos de Alcântara Azevedo\"",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.queONomeDoPassageiroÉ(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o telefone do passageiro é 1234-5678",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOTelefoneDoPassageiroÉ(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o telefone do passageiro é 999-2223",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOTelefoneDoPassageiroÉ(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Deve dar condiçoes conforme tipo de aluguel",
  "description": "\tDado: um flime com estoque de 2 unidades",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "name": "que o preço do aluguel seja R$ \u003cpreco\u003e",
  "keyword": "E "
});
formatter.step({
  "name": "que o tipo do aluguel seja \u003ctipo\u003e",
  "keyword": "E "
});
formatter.step({
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "name": "o preço do alguel será R$ \u003cvalor\u003e",
  "keyword": "Entao "
});
formatter.step({
  "name": "a data de entrega será em \u003cqtdDias\u003e dias",
  "keyword": "E "
});
formatter.step({
  "name": "a pontuação será de \u003cpontuacao\u003e pontos",
  "keyword": "E "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "preco",
        "tipo",
        "valor",
        "qtdDias",
        "pontuacao"
      ]
    },
    {
      "cells": [
        "4",
        "extendido",
        "8",
        "1",
        "1"
      ]
    },
    {
      "cells": [
        "4",
        "comum",
        "4",
        "1",
        "1"
      ]
    },
    {
      "cells": [
        "10",
        "extendido",
        "20",
        "3",
        "2"
      ]
    },
    {
      "cells": [
        "11",
        "comum",
        "3",
        "7",
        "5"
      ]
    },
    {
      "cells": [
        "12",
        "extendido",
        "1",
        "18",
        "6"
      ]
    },
    {
      "cells": [
        "13",
        "comum",
        "2",
        "9",
        "7"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Deve dar condiçoes conforme tipo de aluguel",
  "description": "\tDado: um flime com estoque de 2 unidades",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@unitario"
    }
  ]
});
formatter.step({
  "name": "que o preço do aluguel seja R$ 4",
  "keyword": "E "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOPreçoDoAluguelSejaR$(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o tipo do aluguel seja extendido",
  "keyword": "E "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOTipoDoAluguelSejaExtendido()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "alugar",
  "keyword": "Quando "
});
formatter.match({
  "location": "AprenderCucumberSteps.alugar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o preço do alguel será R$ 8",
  "keyword": "Entao "
});
formatter.match({
  "location": "AprenderCucumberSteps.oPreçoDoAlguelSeráR$(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a data de entrega será em 1 dias",
  "keyword": "E "
});
formatter.match({
  "location": "AprenderCucumberSteps.aDataDeEntregaSeráEmDias(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a pontuação será de 1 pontos",
  "keyword": "E "
});
formatter.match({
  "location": "AprenderCucumberSteps.aPontuaçãoSeráDePontos(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve dar condiçoes conforme tipo de aluguel",
  "description": "\tDado: um flime com estoque de 2 unidades",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@unitario"
    }
  ]
});
formatter.step({
  "name": "que o preço do aluguel seja R$ 4",
  "keyword": "E "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOPreçoDoAluguelSejaR$(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o tipo do aluguel seja comum",
  "keyword": "E "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOTipoDoAluguelSejaComum()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "alugar",
  "keyword": "Quando "
});
formatter.match({
  "location": "AprenderCucumberSteps.alugar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o preço do alguel será R$ 4",
  "keyword": "Entao "
});
formatter.match({
  "location": "AprenderCucumberSteps.oPreçoDoAlguelSeráR$(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a data de entrega será em 1 dias",
  "keyword": "E "
});
formatter.match({
  "location": "AprenderCucumberSteps.aDataDeEntregaSeráEmDias(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a pontuação será de 1 pontos",
  "keyword": "E "
});
formatter.match({
  "location": "AprenderCucumberSteps.aPontuaçãoSeráDePontos(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve dar condiçoes conforme tipo de aluguel",
  "description": "\tDado: um flime com estoque de 2 unidades",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@unitario"
    }
  ]
});
formatter.step({
  "name": "que o preço do aluguel seja R$ 10",
  "keyword": "E "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOPreçoDoAluguelSejaR$(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o tipo do aluguel seja extendido",
  "keyword": "E "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOTipoDoAluguelSejaExtendido()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "alugar",
  "keyword": "Quando "
});
formatter.match({
  "location": "AprenderCucumberSteps.alugar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o preço do alguel será R$ 20",
  "keyword": "Entao "
});
formatter.match({
  "location": "AprenderCucumberSteps.oPreçoDoAlguelSeráR$(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a data de entrega será em 3 dias",
  "keyword": "E "
});
formatter.match({
  "location": "AprenderCucumberSteps.aDataDeEntregaSeráEmDias(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a pontuação será de 2 pontos",
  "keyword": "E "
});
formatter.match({
  "location": "AprenderCucumberSteps.aPontuaçãoSeráDePontos(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve dar condiçoes conforme tipo de aluguel",
  "description": "\tDado: um flime com estoque de 2 unidades",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@unitario"
    }
  ]
});
formatter.step({
  "name": "que o preço do aluguel seja R$ 11",
  "keyword": "E "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOPreçoDoAluguelSejaR$(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o tipo do aluguel seja comum",
  "keyword": "E "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOTipoDoAluguelSejaComum()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "alugar",
  "keyword": "Quando "
});
formatter.match({
  "location": "AprenderCucumberSteps.alugar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o preço do alguel será R$ 3",
  "keyword": "Entao "
});
formatter.match({
  "location": "AprenderCucumberSteps.oPreçoDoAlguelSeráR$(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a data de entrega será em 7 dias",
  "keyword": "E "
});
formatter.match({
  "location": "AprenderCucumberSteps.aDataDeEntregaSeráEmDias(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a pontuação será de 5 pontos",
  "keyword": "E "
});
formatter.match({
  "location": "AprenderCucumberSteps.aPontuaçãoSeráDePontos(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve dar condiçoes conforme tipo de aluguel",
  "description": "\tDado: um flime com estoque de 2 unidades",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@unitario"
    }
  ]
});
formatter.step({
  "name": "que o preço do aluguel seja R$ 12",
  "keyword": "E "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOPreçoDoAluguelSejaR$(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o tipo do aluguel seja extendido",
  "keyword": "E "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOTipoDoAluguelSejaExtendido()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "alugar",
  "keyword": "Quando "
});
formatter.match({
  "location": "AprenderCucumberSteps.alugar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o preço do alguel será R$ 1",
  "keyword": "Entao "
});
formatter.match({
  "location": "AprenderCucumberSteps.oPreçoDoAlguelSeráR$(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a data de entrega será em 18 dias",
  "keyword": "E "
});
formatter.match({
  "location": "AprenderCucumberSteps.aDataDeEntregaSeráEmDias(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a pontuação será de 6 pontos",
  "keyword": "E "
});
formatter.match({
  "location": "AprenderCucumberSteps.aPontuaçãoSeráDePontos(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve dar condiçoes conforme tipo de aluguel",
  "description": "\tDado: um flime com estoque de 2 unidades",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@unitario"
    }
  ]
});
formatter.step({
  "name": "que o preço do aluguel seja R$ 13",
  "keyword": "E "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOPreçoDoAluguelSejaR$(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o tipo do aluguel seja comum",
  "keyword": "E "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOTipoDoAluguelSejaComum()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "alugar",
  "keyword": "Quando "
});
formatter.match({
  "location": "AprenderCucumberSteps.alugar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o preço do alguel será R$ 2",
  "keyword": "Entao "
});
formatter.match({
  "location": "AprenderCucumberSteps.oPreçoDoAlguelSeráR$(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a data de entrega será em 9 dias",
  "keyword": "E "
});
formatter.match({
  "location": "AprenderCucumberSteps.aDataDeEntregaSeráEmDias(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a pontuação será de 7 pontos",
  "keyword": "E "
});
formatter.match({
  "location": "AprenderCucumberSteps.aPontuaçãoSeráDePontos(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/gerenciamento_de_contas.feature");
formatter.feature({
  "name": "Cadastro e edição de contas",
  "description": "  Como um usuário \n  Gostaria de cadastrar contas\n  Para que eu possa distribuir meu dinheiro de uma forma mais organizada",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@funcional"
    },
    {
      "name": "@gerenciamento_de_contas"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Validar cadastro da conta \"\u003cconta\u003e\" com a mensagem esperada \"\u003cmensagem\u003e\"",
  "description": "",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "name": "seleciono Adicionar",
  "keyword": "Quando "
});
formatter.step({
  "name": "informo a conta \"\u003cconta\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "name": "recebo a mensagem \"\u003cmensagem\u003e\"",
  "keyword": "Entao "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "conta",
        "mensagem"
      ]
    },
    {
      "cells": [
        "Conta de Teste",
        "Conta adicionada com sucesso!"
      ]
    },
    {
      "cells": [
        "",
        "Informe o nome da conta"
      ]
    },
    {
      "cells": [
        "Conta mesmo nome",
        "Já existe uma conta com esse nome"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "GerenciamentoDeContas.queEstouAcessandoAAplicação()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo o usuário \"adrianochaves93@gmail.com\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "GerenciamentoDeContas.informoOUsuário(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a senha \"18021995\"",
  "keyword": "E "
});
formatter.match({
  "location": "GerenciamentoDeContas.aSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.match({
  "location": "GerenciamentoDeContas.selecionoEntrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.match({
  "location": "GerenciamentoDeContas.visualizoAPáginaInicial()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.match({
  "location": "GerenciamentoDeContas.selecionoContas()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar cadastro da conta \"Conta de Teste\" com a mensagem esperada \"Conta adicionada com sucesso!\"",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@funcional"
    },
    {
      "name": "@gerenciamento_de_contas"
    }
  ]
});
formatter.step({
  "name": "seleciono Adicionar",
  "keyword": "Quando "
});
formatter.match({
  "location": "GerenciamentoDeContas.selecionoAdicionar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo a conta \"Conta de Teste\"",
  "keyword": "E "
});
formatter.match({
  "location": "GerenciamentoDeContas.informoAConta(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.match({
  "location": "GerenciamentoDeContas.selecionoSalvar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "recebo a mensagem \"Conta adicionada com sucesso!\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "GerenciamentoDeContas.receboAMensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "GerenciamentoDeContas.queEstouAcessandoAAplicação()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo o usuário \"adrianochaves93@gmail.com\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "GerenciamentoDeContas.informoOUsuário(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a senha \"18021995\"",
  "keyword": "E "
});
formatter.match({
  "location": "GerenciamentoDeContas.aSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.match({
  "location": "GerenciamentoDeContas.selecionoEntrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.match({
  "location": "GerenciamentoDeContas.visualizoAPáginaInicial()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.match({
  "location": "GerenciamentoDeContas.selecionoContas()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar cadastro da conta \"\" com a mensagem esperada \"Informe o nome da conta\"",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@funcional"
    },
    {
      "name": "@gerenciamento_de_contas"
    }
  ]
});
formatter.step({
  "name": "seleciono Adicionar",
  "keyword": "Quando "
});
formatter.match({
  "location": "GerenciamentoDeContas.selecionoAdicionar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo a conta \"\"",
  "keyword": "E "
});
formatter.match({
  "location": "GerenciamentoDeContas.informoAConta(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.match({
  "location": "GerenciamentoDeContas.selecionoSalvar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "recebo a mensagem \"Informe o nome da conta\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "GerenciamentoDeContas.receboAMensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "GerenciamentoDeContas.queEstouAcessandoAAplicação()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo o usuário \"adrianochaves93@gmail.com\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "GerenciamentoDeContas.informoOUsuário(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a senha \"18021995\"",
  "keyword": "E "
});
formatter.match({
  "location": "GerenciamentoDeContas.aSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.match({
  "location": "GerenciamentoDeContas.selecionoEntrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.match({
  "location": "GerenciamentoDeContas.visualizoAPáginaInicial()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.match({
  "location": "GerenciamentoDeContas.selecionoContas()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar cadastro da conta \"Conta mesmo nome\" com a mensagem esperada \"Já existe uma conta com esse nome\"",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@funcional"
    },
    {
      "name": "@gerenciamento_de_contas"
    }
  ]
});
formatter.step({
  "name": "seleciono Adicionar",
  "keyword": "Quando "
});
formatter.match({
  "location": "GerenciamentoDeContas.selecionoAdicionar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo a conta \"Conta mesmo nome\"",
  "keyword": "E "
});
formatter.match({
  "location": "GerenciamentoDeContas.informoAConta(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.match({
  "location": "GerenciamentoDeContas.selecionoSalvar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "recebo a mensagem \"Já existe uma conta com esse nome\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "GerenciamentoDeContas.receboAMensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validar edicao da conta \"\u003cconta\u003e\" com a mensagem esperada \"\u003cmensagem\u003e\"",
  "description": "",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "name": "seleciono Listar",
  "keyword": "Quando "
});
formatter.step({
  "name": "clico em editar",
  "keyword": "E "
});
formatter.step({
  "name": "informo o novo nome \"\u003cnome\u003e\" da conta",
  "keyword": "E "
});
formatter.step({
  "name": "clico em salvar",
  "keyword": "E "
});
formatter.step({
  "name": "recebo a mensagem \"\u003cmensagem\u003e\"",
  "keyword": "Entao "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "nome",
        "mensagem"
      ]
    },
    {
      "cells": [
        "Conta alterada",
        "Conta alterada com sucesso"
      ]
    },
    {
      "cells": [
        "",
        "Informe o nome da conta"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "GerenciamentoDeContas.queEstouAcessandoAAplicação()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo o usuário \"adrianochaves93@gmail.com\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "GerenciamentoDeContas.informoOUsuário(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a senha \"18021995\"",
  "keyword": "E "
});
formatter.match({
  "location": "GerenciamentoDeContas.aSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.match({
  "location": "GerenciamentoDeContas.selecionoEntrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.match({
  "location": "GerenciamentoDeContas.visualizoAPáginaInicial()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.match({
  "location": "GerenciamentoDeContas.selecionoContas()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar edicao da conta \"\u003cconta\u003e\" com a mensagem esperada \"Conta alterada com sucesso\"",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@funcional"
    },
    {
      "name": "@gerenciamento_de_contas"
    }
  ]
});
formatter.step({
  "name": "seleciono Listar",
  "keyword": "Quando "
});
formatter.match({
  "location": "GerenciamentoDeContas.selecionoListar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico em editar",
  "keyword": "E "
});
formatter.match({
  "location": "GerenciamentoDeContas.clicoEmEditar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo o novo nome \"Conta alterada\" da conta",
  "keyword": "E "
});
formatter.match({
  "location": "GerenciamentoDeContas.informoONovoNomeDaConta(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico em salvar",
  "keyword": "E "
});
formatter.match({
  "location": "GerenciamentoDeContas.clicoEmSalvar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "recebo a mensagem \"Conta alterada com sucesso\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "GerenciamentoDeContas.receboAMensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "GerenciamentoDeContas.queEstouAcessandoAAplicação()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo o usuário \"adrianochaves93@gmail.com\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "GerenciamentoDeContas.informoOUsuário(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a senha \"18021995\"",
  "keyword": "E "
});
formatter.match({
  "location": "GerenciamentoDeContas.aSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.match({
  "location": "GerenciamentoDeContas.selecionoEntrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.match({
  "location": "GerenciamentoDeContas.visualizoAPáginaInicial()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.match({
  "location": "GerenciamentoDeContas.selecionoContas()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar edicao da conta \"\u003cconta\u003e\" com a mensagem esperada \"Informe o nome da conta\"",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@funcional"
    },
    {
      "name": "@gerenciamento_de_contas"
    }
  ]
});
formatter.step({
  "name": "seleciono Listar",
  "keyword": "Quando "
});
formatter.match({
  "location": "GerenciamentoDeContas.selecionoListar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico em editar",
  "keyword": "E "
});
formatter.match({
  "location": "GerenciamentoDeContas.clicoEmEditar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo o novo nome \"\" da conta",
  "keyword": "E "
});
formatter.match({
  "location": "GerenciamentoDeContas.informoONovoNomeDaConta(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico em salvar",
  "keyword": "E "
});
formatter.match({
  "location": "GerenciamentoDeContas.clicoEmSalvar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "recebo a mensagem \"Informe o nome da conta\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "GerenciamentoDeContas.receboAMensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "GerenciamentoDeContas.queEstouAcessandoAAplicação()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo o usuário \"adrianochaves93@gmail.com\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "GerenciamentoDeContas.informoOUsuário(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a senha \"18021995\"",
  "keyword": "E "
});
formatter.match({
  "location": "GerenciamentoDeContas.aSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.match({
  "location": "GerenciamentoDeContas.selecionoEntrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.match({
  "location": "GerenciamentoDeContas.visualizoAPáginaInicial()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.match({
  "location": "GerenciamentoDeContas.selecionoContas()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@funcional"
    },
    {
      "name": "@gerenciamento_de_contas"
    }
  ]
});
formatter.step({
  "name": "seleciono Listar",
  "keyword": "Quando "
});
formatter.match({
  "location": "GerenciamentoDeContas.selecionoListar()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/movimentacao_conta.feature");
formatter.feature({
  "name": "Crar movimentações",
  "description": "\tComo um usuario que possui uma conta\n\tEu quero criar movimentações financeiras",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@funcional"
    },
    {
      "name": "@movimentacao_de_contas"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Adicionar movimentaco mensagem esperada \"\u003cmensagem\u003e\" descricao \"\u003cdescricao\u003e\"",
  "description": "",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "name": "eu seleciono o tipo \"\u003ctipo\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "name": "eu preencho a data da movimentacao \"\u003cdataMovimentacao\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "data do pagamento \"\u003cdataPagamento\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "descricao \"\u003cdescricao\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "interessado \"\u003cinteressado\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "valor \"\u003cvalor\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "conta \"\u003cconta\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "situacao \"\u003csituacao\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "valido a mensagem \"\u003cmensagem\u003e\"",
  "keyword": "Entao "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "tipo",
        "dataMovimentacao",
        "dataPagamento",
        "descricao",
        "interessado",
        "valor",
        "conta",
        "situacao",
        "mensagem"
      ]
    },
    {
      "cells": [
        "REC",
        "17/04/2019",
        "18/04/2019",
        "Adicao teste aceitar",
        "Adriano",
        "1000",
        "Conta para movimentacoes",
        "status_pago",
        "Movimentação adicionada com sucesso!"
      ]
    },
    {
      "cells": [
        "DESP",
        "02/02/2019",
        "18/06/2019",
        "Adicao aceitar2",
        "Adriano c",
        "2000",
        "Conta para movimentacoes",
        "status_pendente",
        "Movimentação adicionada com sucesso!"
      ]
    },
    {
      "cells": [
        "REC",
        "02/02/2019",
        "18/06/2019",
        "Adicao aceitar3",
        "Adriano c",
        "2000",
        "Conta para movimentacoes",
        "status_pendente",
        "Movimentação adicionada com sucesso!"
      ]
    },
    {
      "cells": [
        "DESP",
        "02/02/019",
        "18/06/201",
        "Adicao erro1",
        "Adriano c",
        "2000",
        "Conta para movimentacoes",
        "status_pendente",
        "Data da Movimentação inválida (DD/MM/YYYY)"
      ]
    },
    {
      "cells": [
        "DESP",
        "02/02/019",
        "18/6/2019",
        "Adicao erro2",
        "Adriano c",
        "2000",
        "Conta para movimentacoes",
        "status_pendente",
        "Data da Movimentação inválida (DD/MM/YYYY)"
      ]
    },
    {
      "cells": [
        "DESP",
        "02/02/019",
        "1/06/2019",
        "Adicao erro3",
        "Adriano c",
        "2000",
        "Conta para movimentacoes",
        "status_pendente",
        "Data da Movimentação inválida (DD/MM/YYYY)"
      ]
    },
    {
      "cells": [
        "DESP",
        "02/02/019",
        "18/06/2019",
        "Adicao erro4",
        "Adriano c",
        "2000",
        "Conta para movimentacoes",
        "status_pendente",
        "Data da Movimentação inválida (DD/MM/YYYY)"
      ]
    },
    {
      "cells": [
        "REC",
        "02/0/2019",
        "01/06/2019",
        "Adicao erro5",
        "Adriano c",
        "2000",
        "Conta para movimentacoes",
        "status_pendente",
        "Data da Movimentação inválida (DD/MM/YYYY)"
      ]
    },
    {
      "cells": [
        "DESP",
        "0/02/2019",
        "01/06/2019",
        "Adicao erro6",
        "Adriano c",
        "2000",
        "Conta para movimentacoes",
        "status_pendente",
        "Data da Movimentação inválida (DD/MM/YYYY)"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "que desejo adicionar uma movimentacao",
  "keyword": "Dado "
});
formatter.match({
  "location": "MovimentacaoConta.desejoAdicionarUmaMovimentacao()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Adicionar movimentaco mensagem esperada \"Movimentação adicionada com sucesso!\" descricao \"Adicao teste aceitar\"",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@funcional"
    },
    {
      "name": "@movimentacao_de_contas"
    }
  ]
});
formatter.step({
  "name": "eu seleciono o tipo \"REC\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "MovimentacaoConta.euSelecionoOTipo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu preencho a data da movimentacao \"17/04/2019\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.euPreenchoADataDaMovimentacao(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "data do pagamento \"18/04/2019\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.dataDoPagamento(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "descricao \"Adicao teste aceitar\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.descricao(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "interessado \"Adriano\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.interessado(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valor \"1000\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.valor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "conta \"Conta para movimentacoes\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.conta(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "situacao \"status_pago\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.situacao(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido a mensagem \"Movimentação adicionada com sucesso!\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "MovimentacaoConta.validoAMensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "que desejo adicionar uma movimentacao",
  "keyword": "Dado "
});
formatter.match({
  "location": "MovimentacaoConta.desejoAdicionarUmaMovimentacao()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Adicionar movimentaco mensagem esperada \"Movimentação adicionada com sucesso!\" descricao \"Adicao aceitar2\"",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@funcional"
    },
    {
      "name": "@movimentacao_de_contas"
    }
  ]
});
formatter.step({
  "name": "eu seleciono o tipo \"DESP\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "MovimentacaoConta.euSelecionoOTipo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu preencho a data da movimentacao \"02/02/2019\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.euPreenchoADataDaMovimentacao(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "data do pagamento \"18/06/2019\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.dataDoPagamento(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "descricao \"Adicao aceitar2\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.descricao(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "interessado \"Adriano c\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.interessado(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valor \"2000\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.valor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "conta \"Conta para movimentacoes\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.conta(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "situacao \"status_pendente\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.situacao(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido a mensagem \"Movimentação adicionada com sucesso!\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "MovimentacaoConta.validoAMensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "que desejo adicionar uma movimentacao",
  "keyword": "Dado "
});
formatter.match({
  "location": "MovimentacaoConta.desejoAdicionarUmaMovimentacao()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Adicionar movimentaco mensagem esperada \"Movimentação adicionada com sucesso!\" descricao \"Adicao aceitar3\"",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@funcional"
    },
    {
      "name": "@movimentacao_de_contas"
    }
  ]
});
formatter.step({
  "name": "eu seleciono o tipo \"REC\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "MovimentacaoConta.euSelecionoOTipo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu preencho a data da movimentacao \"02/02/2019\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.euPreenchoADataDaMovimentacao(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "data do pagamento \"18/06/2019\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.dataDoPagamento(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "descricao \"Adicao aceitar3\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.descricao(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "interessado \"Adriano c\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.interessado(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valor \"2000\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.valor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "conta \"Conta para movimentacoes\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.conta(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "situacao \"status_pendente\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.situacao(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido a mensagem \"Movimentação adicionada com sucesso!\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "MovimentacaoConta.validoAMensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "que desejo adicionar uma movimentacao",
  "keyword": "Dado "
});
formatter.match({
  "location": "MovimentacaoConta.desejoAdicionarUmaMovimentacao()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Adicionar movimentaco mensagem esperada \"Data da Movimentação inválida (DD/MM/YYYY)\" descricao \"Adicao erro1\"",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@funcional"
    },
    {
      "name": "@movimentacao_de_contas"
    }
  ]
});
formatter.step({
  "name": "eu seleciono o tipo \"DESP\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "MovimentacaoConta.euSelecionoOTipo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu preencho a data da movimentacao \"02/02/019\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.euPreenchoADataDaMovimentacao(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "data do pagamento \"18/06/201\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.dataDoPagamento(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "descricao \"Adicao erro1\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.descricao(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "interessado \"Adriano c\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.interessado(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valor \"2000\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.valor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "conta \"Conta para movimentacoes\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.conta(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "situacao \"status_pendente\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.situacao(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido a mensagem \"Data da Movimentação inválida (DD/MM/YYYY)\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "MovimentacaoConta.validoAMensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "que desejo adicionar uma movimentacao",
  "keyword": "Dado "
});
formatter.match({
  "location": "MovimentacaoConta.desejoAdicionarUmaMovimentacao()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Adicionar movimentaco mensagem esperada \"Data da Movimentação inválida (DD/MM/YYYY)\" descricao \"Adicao erro2\"",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@funcional"
    },
    {
      "name": "@movimentacao_de_contas"
    }
  ]
});
formatter.step({
  "name": "eu seleciono o tipo \"DESP\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "MovimentacaoConta.euSelecionoOTipo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu preencho a data da movimentacao \"02/02/019\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.euPreenchoADataDaMovimentacao(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "data do pagamento \"18/6/2019\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.dataDoPagamento(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "descricao \"Adicao erro2\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.descricao(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "interessado \"Adriano c\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.interessado(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valor \"2000\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.valor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "conta \"Conta para movimentacoes\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.conta(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "situacao \"status_pendente\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.situacao(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido a mensagem \"Data da Movimentação inválida (DD/MM/YYYY)\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "MovimentacaoConta.validoAMensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "que desejo adicionar uma movimentacao",
  "keyword": "Dado "
});
formatter.match({
  "location": "MovimentacaoConta.desejoAdicionarUmaMovimentacao()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Adicionar movimentaco mensagem esperada \"Data da Movimentação inválida (DD/MM/YYYY)\" descricao \"Adicao erro3\"",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@funcional"
    },
    {
      "name": "@movimentacao_de_contas"
    }
  ]
});
formatter.step({
  "name": "eu seleciono o tipo \"DESP\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "MovimentacaoConta.euSelecionoOTipo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu preencho a data da movimentacao \"02/02/019\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.euPreenchoADataDaMovimentacao(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "data do pagamento \"1/06/2019\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.dataDoPagamento(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "descricao \"Adicao erro3\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.descricao(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "interessado \"Adriano c\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.interessado(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valor \"2000\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.valor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "conta \"Conta para movimentacoes\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.conta(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "situacao \"status_pendente\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.situacao(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido a mensagem \"Data da Movimentação inválida (DD/MM/YYYY)\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "MovimentacaoConta.validoAMensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "que desejo adicionar uma movimentacao",
  "keyword": "Dado "
});
formatter.match({
  "location": "MovimentacaoConta.desejoAdicionarUmaMovimentacao()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Adicionar movimentaco mensagem esperada \"Data da Movimentação inválida (DD/MM/YYYY)\" descricao \"Adicao erro4\"",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@funcional"
    },
    {
      "name": "@movimentacao_de_contas"
    }
  ]
});
formatter.step({
  "name": "eu seleciono o tipo \"DESP\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "MovimentacaoConta.euSelecionoOTipo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu preencho a data da movimentacao \"02/02/019\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.euPreenchoADataDaMovimentacao(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "data do pagamento \"18/06/2019\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.dataDoPagamento(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "descricao \"Adicao erro4\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.descricao(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "interessado \"Adriano c\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.interessado(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valor \"2000\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.valor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "conta \"Conta para movimentacoes\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.conta(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "situacao \"status_pendente\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.situacao(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido a mensagem \"Data da Movimentação inválida (DD/MM/YYYY)\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "MovimentacaoConta.validoAMensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "que desejo adicionar uma movimentacao",
  "keyword": "Dado "
});
formatter.match({
  "location": "MovimentacaoConta.desejoAdicionarUmaMovimentacao()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Adicionar movimentaco mensagem esperada \"Data da Movimentação inválida (DD/MM/YYYY)\" descricao \"Adicao erro5\"",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@funcional"
    },
    {
      "name": "@movimentacao_de_contas"
    }
  ]
});
formatter.step({
  "name": "eu seleciono o tipo \"REC\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "MovimentacaoConta.euSelecionoOTipo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu preencho a data da movimentacao \"02/0/2019\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.euPreenchoADataDaMovimentacao(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "data do pagamento \"01/06/2019\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.dataDoPagamento(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "descricao \"Adicao erro5\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.descricao(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "interessado \"Adriano c\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.interessado(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valor \"2000\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.valor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "conta \"Conta para movimentacoes\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.conta(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "situacao \"status_pendente\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.situacao(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido a mensagem \"Data da Movimentação inválida (DD/MM/YYYY)\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "MovimentacaoConta.validoAMensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "que desejo adicionar uma movimentacao",
  "keyword": "Dado "
});
formatter.match({
  "location": "MovimentacaoConta.desejoAdicionarUmaMovimentacao()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Adicionar movimentaco mensagem esperada \"Data da Movimentação inválida (DD/MM/YYYY)\" descricao \"Adicao erro6\"",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@funcional"
    },
    {
      "name": "@movimentacao_de_contas"
    }
  ]
});
formatter.step({
  "name": "eu seleciono o tipo \"DESP\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "MovimentacaoConta.euSelecionoOTipo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu preencho a data da movimentacao \"0/02/2019\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.euPreenchoADataDaMovimentacao(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "data do pagamento \"01/06/2019\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.dataDoPagamento(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "descricao \"Adicao erro6\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.descricao(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "interessado \"Adriano c\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.interessado(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valor \"2000\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.valor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "conta \"Conta para movimentacoes\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.conta(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "situacao \"status_pendente\"",
  "keyword": "E "
});
formatter.match({
  "location": "MovimentacaoConta.situacao(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido a mensagem \"Data da Movimentação inválida (DD/MM/YYYY)\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "MovimentacaoConta.validoAMensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});