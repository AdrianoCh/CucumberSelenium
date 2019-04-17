package br.com.compasso.steps;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.After;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;

public class MovimentacaoConta {
	WebDriver driver = new ChromeDriver();
	
	@Dado("que desejo adicionar uma movimentacao")
	public void desejoAdicionarUmaMovimentacao() {
		driver.get("https://srbarriga.herokuapp.com");
		driver.findElement(By.id("email")).sendKeys("adrianochaves93@gmail.com");
		driver.findElement(By.id("senha")).sendKeys("18021995");
		driver.findElement(By.cssSelector("body > div.jumbotron.col-lg-4 > form > button")).click();
	    Assert.assertTrue(driver.getPageSource().contains("Bem vindo, Adriano !"));
	    driver.findElement(By.linkText("Criar Movimentação")).click();
	}

	@Quando("eu seleciono o tipo {string}")
	public void euSelecionoOTipo(String string) {
	    Select selectBox = new Select(driver.findElement(By.id("tipo")));
	    selectBox.selectByValue(string);
	    System.out.println("-----> SELECIONEI TIPO <-----------" + string);
	}

	@Quando("eu preencho a data da movimentacao {string}")
	public void euPreenchoADataDaMovimentacao(String string) {
		driver.findElement(By.id("data_transacao")).sendKeys(string);
	}

	@Quando("data do pagamento {string}")
	public void dataDoPagamento(String string) {
		driver.findElement(By.id("data_pagamento")).sendKeys(string);
	}

	@Quando("descricao {string}")
	public void descricao(String string) {
		driver.findElement(By.id("descricao")).sendKeys(string);
	}

	@Quando("interessado {string}")
	public void interessado(String string) {
		driver.findElement(By.id("interessado")).sendKeys(string);
	}

	@Quando("valor {string}")
	public void valor(String string) {
		driver.findElement(By.id("valor")).sendKeys(string);
	}

	@Quando("conta {string}")
	public void conta(String string) {
	    Select selectConta = new Select(driver.findElement(By.id("conta")));
	    selectConta.selectByVisibleText(string);
	}

	@Quando("situacao {string}")
	public void situacao(String string) {
		driver.findElement(By.id(string));
	}
	
	@Entao("valido a mensagem {string}")
	public void validoAMensagem(String string) {
		driver.getPageSource().contains(string);
	}
	@After
	public void fecharBrowser() {
		driver.quit();
	}
}
