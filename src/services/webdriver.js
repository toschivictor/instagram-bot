import('chromedriver');
import { Builder } from 'selenium-webdriver';

export const initiateDriver = async () => {
  const driver = await new Builder().forBrowser('chrome').build();
  return driver;
};
