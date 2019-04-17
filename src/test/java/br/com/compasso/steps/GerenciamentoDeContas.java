package br.com.compasso.steps;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

public class GerenciamentoDeContas {
	
	//private WebDriver driver;
	WebDriver driver = new ChromeDriver();
		
	@Dado("que estou acessando a aplicação")
	public void queEstouAcessandoAAplicação() {
	    driver.get("https://srbarriga.herokuapp.com");
	}

	@Quando("informo o usuário {string}")
	public void informoOUsuário(String string) {
		driver.findElement(By.id("email")).sendKeys(string);
	}

	@Quando("a senha {string}")
	public void aSenha(String string) {
		driver.findElement(By.id("senha")).sendKeys(string);
	}

	@Quando("seleciono entrar")
	public void selecionoEntrar() {
		driver.findElement(By.cssSelector("body > div.jumbotron.col-lg-4 > form > button")).click();
	}

	@Então("visualizo a página inicial")
	public void visualizoAPáginaInicial() {
	    Assert.assertTrue(driver.getPageSource().contains("Bem vindo, Adriano !"));
	}

	@Quando("seleciono Contas")
	public void selecionoContas() {
	    driver.findElement(By.linkText("Contas")).click();
	}

	@Quando("seleciono Adicionar")
	public void selecionoAdicionar() {
	    driver.findElement(By.linkText("Adicionar")).click();
	}

	@Quando("informo a conta {string}")
	public void informoAConta(String string) {
	    driver.findElement(By.id("nome")).sendKeys(string);
	}

	@Quando("seleciono Salvar")
	public void selecionoSalvar() {
		driver.findElement(By.cssSelector("body > div.col-lg-10 > form > div.btn-group > button")).click();
	}

	@Entao("recebo a mensagem {string}")
	public void receboAMensagem(String string) {
	    driver.getPageSource().contains(string);
	}
///////////////////////////////////////////////////////////	
	
	@Quando("seleciono Listar")
	public void selecionoListar() {
		driver.findElement(By.linkText("Listar")).click();
	}

	@Quando("clico em editar")
	public void clicoEmEditar() {
		driver.findElement(By.cssSelector("#tabelaContas > tbody > tr:nth-child(1) > td:nth-child(2) > a:nth-child(1) > span")).click();
	}

	@Quando("informo o novo nome {string} da conta")
	public void informoONovoNomeDaConta(String string) {
		driver.findElement(By.id("nome")).sendKeys(string);
	}

	@Quando("clico em salvar")
	public void clicoEmSalvar() {
		driver.findElement(By.cssSelector("body > div.col-lg-10 > form > div.btn-group > button")).click();
	}
	
	@After(order = 1, value= {"~@unitario"})//o value especifica em qual tag o after NÃO vai rodar
	public void screenshot(Scenario cenario) {
		File file = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
		try {
			System.out.println("---------> NOME DO CENARIO E: <----------------" +cenario.getName().replaceAll("\"", ""));
			FileUtils.copyFile(file, new File("target/screenshot/"+cenario.getName().replaceAll("\"", "")+"nome.jpg"));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@After(order = 0, value= {"~@unitario"})
	public void fecharBrouwser() {
		driver.quit();
	}
}
