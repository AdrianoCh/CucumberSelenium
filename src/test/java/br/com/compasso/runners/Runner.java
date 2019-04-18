package br.com.compasso.runners;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
			features = "src/test/resources/features/",//para executar todas as features, é so apagar o nome da feature
			glue = "br.com.compasso.steps",
			tags = "~@ignore, @unitario", //tag que sera executada @~ignore nao executa a tag negada somente
			monochrome = true,
			snippets = SnippetType.CAMELCASE,
			//dryRun = true,
			//strict = true,
			plugin = {"pretty", "html:target/report-html", "json:target/report.json"}// HTML gera relatorio html na pasta especificada, pretty gera relatorio no terminal, json gera um arqui json na pasta especificada com os testes
		)
//dry run valida a sintaxe e verifica se o mapeamento de todos os passos para as classes step estão corretos.
//strict falha o teste se houver algum metodo da feature nao implementado na classe java

public class Runner {
	private static WebDriver driver;
	
	@BeforeClass
	public static void resetBanco() {
		driver = new ChromeDriver();
		driver.get("https://srbarriga.herokuapp.com/reset");
		driver.findElement(By.id("email")).sendKeys("adrianochaves93@gmail.com");
		driver.findElement(By.id("senha")).sendKeys("18021995");
		driver.findElement(By.cssSelector("body > div.jumbotron.col-lg-4 > form > button")).click();
		driver.get("https://srbarriga.herokuapp.com/reset");
		
		driver.quit();
		System.out.println("---> BANCO RESETADO <-----");
	}
}
