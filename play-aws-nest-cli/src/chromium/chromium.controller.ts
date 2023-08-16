import { Controller } from '@nestjs/common';
import { Browser, chromium, Page } from 'playwright';
import { LoginHandlerService } from './login-handler.service';
// set playwright options
const options = {
  headless: false,
  slowMo: 1000,
};
@Controller('chromium')
export class ChromiumController {
  constructor(private loginHandlerService: LoginHandlerService) {}
  static mainPage: Page;
  mainPage: Page;
  browser: Browser;
  async launch() {
    this.loginHandlerService.getConfiguration();
    const browser = await chromium.launch(options);
    const context = await browser.newContext();
    this.browser = browser;

    /**
     * The page that will respond to commands given by the user.
     */
    this.mainPage = await context.newPage();
    ChromiumController.mainPage = this.mainPage;
    this.loginHandlerService.login(this.mainPage);
  }
  close() {
    this.mainPage.close();
    this.browser.close();
  }
}
