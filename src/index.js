import('dotenv/config');
import { client } from './services/instagram';
import { init } from './services/webdriver';

console.log(client);
init();
