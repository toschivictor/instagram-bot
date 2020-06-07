import { By } from 'selenium-webdriver';

// TODO: identify nice-to-have features in the 'instagram-web-api' package
// and implement them

export const login = async (driver) => {
  const { username, password } = process.env;

  await driver.get(process.env.LOGIN_URL);
  await driver.sleep(500);
  await driver.findElement(By.css('input[name="username"]')).sendKeys(username);
  await driver.findElement(By.css('input[name="password"]')).sendKeys(password);
  await driver.findElement(By.css('button[type="submit"]')).click();
};

export const likeMedia = async (driver, hashtag) => {
  await driver.sleep(3500);
  await driver.get(`${process.env.TAGS_URL}${hashtag}/`);
  await driver.sleep(500);
  await driver.executeScript('window.scrollTo(0,20000);');
  await driver.sleep(500);
  await driver.findElement(By.css('main article div div div div a')).click();
  await driver.sleep(800);
  likeNextMedia(driver);
};

const likeNextMedia = async (driver, maxTries = 0) => {
  if (maxTries < 15) {
    await driver.findElement(By.css('svg[aria-label="Like"]')).click();
    await driver.sleep(500);
    await driver.findElement(By.css('.coreSpriteRightPaginationArrow')).click();
    await driver.sleep(2000);
    return likeNextMedia(driver, maxTries++);
  }
};
