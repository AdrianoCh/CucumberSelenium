package br.com.compasso.steps;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import org.junit.Assert;

import cucumber.api.PendingException;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

public class AprenderCucumberSteps {
	@Dado("^que criei o arquivo corretamente$")
	public void que_criei_o_arquivo_corretamente() throws Throwable {
	}

	@Quando("^executa-lo$")
	public void executa_lo() throws Throwable {
	}

	@Entao("^a especificação deve executar com sucesso$")
	public void a_especificação_deve_executar_com_sucesso() throws Throwable {
	}

	////////
	private int contador = 0;

	@Dado("que o valor do contador é {int}")
	public void queOValorDoContadorÉ(Integer int1) {
		contador = int1;
	}

	@Quando("eu acrescentar em {int}")
	public void euAcrescentarEm(Integer int1) {
		contador = contador + int1;
	}

	@Entao("o valor deve ser {int}")
	public void oValorDeveSer(Integer int1) {
		System.out.println(int1);
		System.out.println(contador);
		Assert.assertTrue(int1 == contador);
	}
	/////////////////////////////////////////////
	
	private int diaEntrega;
	private int mesEntrega;
	private int anoEntrega;

	@Dado("que a entrega é dia {int}\\/{int}\\/{int}")
	public void queAEntregaÉDia(Integer dia, Integer mes, Integer ano) {
		diaEntrega = dia;
		mesEntrega = mes;
		anoEntrega = ano;
		
	}

	@Quando("a entrega atrasar em {int} dias {int} meses {int} anos")
	public void aEntregaAtrasarEmDoisDias(Integer dias, Integer meses, Integer anos) {
		diaEntrega = diaEntrega + dias;
		mesEntrega = mesEntrega + meses;
		anoEntrega = anoEntrega + anos;
		
	}

	@Entao("a entrega será efetuada em {int}\\/{int}\\/{int}")
	public void aEntregaSeráEfetuadaEm(int diaAtraso, int mesAtraso, int anoAtraso) {
		Assert.assertEquals(diaEntrega, diaAtraso);
		Assert.assertEquals(mesEntrega, mesAtraso);
		Assert.assertEquals(anoEntrega, anoAtraso);
	}
	
	////////////////////////////////////////////////////////////////////////////////////////
	
	@Dado("que o ticket é AF{int}")
	public void queOTicketÉAF(Integer int1) {
	}

	@Dado("que o valor da passagem é R$ {double}")
	public void queOValorDaPassagemÉR$(Double double1) {
	}

	@Dado("que o nome do passageiro é {string}")
	public void queONomeDoPassageiroÉ(String string) {
	}

	@Dado("que o telefone do passageiro é {int}{int}")
	public void queOTelefoneDoPassageiroÉ(Integer int1, Integer int2) {
	}

	@Quando("criar os steps")
	public void criarOsSteps() {
	}

	@Então("o teste vai funcionar")
	public void oTesteVaiFuncionar() {
	}
	
	@Dado("que o ticket especial é AB{int}")
	public void queOTicketEspecialÉAB(Integer int1) {
	}
	
	@Dado("que o ticket é AB{int}")
	public void queOTicketÉAB(Integer int1) {
	}

	@Dado("que o ticket é CD{int}")
	public void queOTicketÉCD(Integer int1) {
	}

	@Dado("que o ticket é AG{int}")
	public void queOTicketÉAG(Integer int1) {
	}

	@Dado("que o valor da passagem é R$ {double}{double}")
	public void queOValorDaPassagemÉR$(Double double1, Double double2) {
	}
	/////////////////////////////////////////////////
	
	@Dado("que o preço do aluguel seja R$ {int}")
	public void queOPreçoDoAluguelSejaR$(Integer int1) {
	}

	@Dado("que o tipo do aluguel seja extendido")
	public void queOTipoDoAluguelSejaExtendido() {
	}

	@Quando("alugar")
	public void alugar() {
	}

	@Entao("o preço do alguel será R$ {int}")
	public void oPreçoDoAlguelSeráR$(Integer int1) {
	}

	@Entao("a data de entrega será em {int} dias")
	public void aDataDeEntregaSeráEmDias(Integer int1) {
	}

	@Entao("a pontuação será de {int} pontos")
	public void aPontuaçãoSeráDePontos(Integer int1) {
	}

	@Dado("que o tipo do aluguel seja comum")
	public void queOTipoDoAluguelSejaComum() {
	}
	
}
