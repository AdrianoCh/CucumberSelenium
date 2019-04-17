import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TesteAmbiente {
	public static void main(String[] args) {
		//System.setProperty("webdriver.chrome.driver", "caminho aonde esta o driver chromedriver.exe"); CASO O SELENIUM NAO RECONHECER O DRIVER, UTILIZAR ESSA LINHA
		WebDriver driver = new ChromeDriver();
		driver.get("https://srbarriga.herokuapp.com");
	}
}
