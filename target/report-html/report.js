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
formatter.uri("file:src/test/resources/features/cadastro_de_contas.feature");
formatter.feature({
  "name": "Cadastro de contas",
  "description": "  Como um usuário \n  Gostaria de cadastrar contas\n  Para que eu possa distribuir meu dinheiro de uma forma mais organizada",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "name": "Validar cadastro da conta \"\u003cconta\u003e\" com a mensagem esperada \"\u003cmensagem\u003e\"",
  "description": "",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "name": "informo a conta \"\u003cconta\u003e\"",
  "keyword": "Quando "
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
  "location": "CadastroDeContas.queEstouAcessandoAAplicação()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo o usuário \"adrianochaves93@gmail.com\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastroDeContas.informoOUsuário(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a senha \"18021995\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroDeContas.aSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroDeContas.selecionoEntrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.match({
  "location": "CadastroDeContas.visualizoAPáginaInicial()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastroDeContas.selecionoContas()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroDeContas.selecionoAdicionar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar cadastro da conta \"Conta de Teste\" com a mensagem esperada \"Conta adicionada com sucesso!\"",
  "description": "",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "name": "informo a conta \"Conta de Teste\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastroDeContas.informoAConta(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroDeContas.selecionoSalvar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "recebo a mensagem \"Conta adicionada com sucesso!\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastroDeContas.receboAMensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
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
  "location": "CadastroDeContas.queEstouAcessandoAAplicação()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo o usuário \"adrianochaves93@gmail.com\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastroDeContas.informoOUsuário(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a senha \"18021995\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroDeContas.aSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroDeContas.selecionoEntrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.match({
  "location": "CadastroDeContas.visualizoAPáginaInicial()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastroDeContas.selecionoContas()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroDeContas.selecionoAdicionar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar cadastro da conta \"\" com a mensagem esperada \"Informe o nome da conta\"",
  "description": "",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "name": "informo a conta \"\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastroDeContas.informoAConta(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroDeContas.selecionoSalvar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "recebo a mensagem \"Informe o nome da conta\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastroDeContas.receboAMensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
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
  "location": "CadastroDeContas.queEstouAcessandoAAplicação()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo o usuário \"adrianochaves93@gmail.com\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastroDeContas.informoOUsuário(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a senha \"18021995\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroDeContas.aSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroDeContas.selecionoEntrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.match({
  "location": "CadastroDeContas.visualizoAPáginaInicial()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastroDeContas.selecionoContas()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroDeContas.selecionoAdicionar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar cadastro da conta \"Conta mesmo nome\" com a mensagem esperada \"Já existe uma conta com esse nome\"",
  "description": "",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "name": "informo a conta \"Conta mesmo nome\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastroDeContas.informoAConta(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroDeContas.selecionoSalvar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "recebo a mensagem \"Já existe uma conta com esse nome\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastroDeContas.receboAMensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});