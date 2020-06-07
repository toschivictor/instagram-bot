import 'dotenv/config';
import { likeMedia, login } from './services/instagram';
import { initiateDriver } from './services/webdriver';
import { hashtags } from './services/utilities';

(async function start() {
  const driver = await initiateDriver();
  const hashtag = hashtags[Math.floor(Math.random() * hashtags.length)];

  try {
    await login(driver);
    await likeMedia(driver, hashtag);
  } catch (error) {
    console.log('Error on login:', error);
  }
})();
