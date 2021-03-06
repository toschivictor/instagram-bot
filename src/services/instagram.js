import { By } from 'selenium-webdriver';

// TODO: identify nice-to-have features in the 'instagram-web-api' package
// and implement them

export const login = async (driver) => {
  const { username, password } = process.env;
  try {
    await driver.get(process.env.LOGIN_URL);
    await driver.sleep(500);
    await driver
      .findElement(By.css('input[name="username"]'))
      .sendKeys(username);
    await driver
      .findElement(By.css('input[name="password"]'))
      .sendKeys(password);
    await driver.findElement(By.css('button[type="submit"]')).click();
  } catch (error) {
    console.log('login:', error);
  }
};

export const likeMedia = async (driver, hashtag) => {
  try {
    await driver.sleep(3500);
    await driver.get(`${process.env.TAGS_URL}${hashtag}/`);
    await driver.sleep(500);
    await driver.executeScript('window.scrollTo(0,20000);');
    await driver.sleep(500);
    await driver.findElement(By.css('main article div div div div a')).click();
    await driver.sleep(800);
    likeNextMedia(driver);
  } catch (error) {
    console.log('likeMedia:', error);
  }
};

const likeNextMedia = async (driver, currentTry = 1) => {
  console.log('Image number:', currentTry);

  if (currentTry < 25) {
    try {
      await driver.findElement(By.css('svg[aria-label="Like"]')).click();
      await driver.sleep(500);
      await driver
        .findElement(By.css('.coreSpriteRightPaginationArrow'))
        .click();
      await driver.sleep(2000);
      return likeNextMedia(driver, currentTry + 1);
    } catch (error) {
      console.log('likeNextMedia:', error);
      await driver.quit();
    }
  } else {
    await driver.quit();
  }
};
