import { Controller } from '@nestjs/common';
import { chromium, Page } from 'playwright';
import { LoginHandlerService } from './login-handler.service';
// set playwright options
const options = {
  headless: false,
  slowMo: 1000,
};
@Controller('chromium')
export class ChromiumController {
  constructor(private loginHandlerService: LoginHandlerService) {}
  mainPage: Page;
  async launch() {
    this.loginHandlerService.getConfiguration();
    // const browser = await chromium.launch(options);
    // const context = await browser.newContext();
    // /**
    //  * The page that will respond to commands given by the user.
    //  */
    // this.mainPage = await context.newPage();
    // this.mainPage.goto('https://www.google.com');
  }
}
