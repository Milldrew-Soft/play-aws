import * as zod from 'zod';
import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { homedir } from 'os';
import { join } from 'path';
import { Page } from 'playwright';
const CONFIG_FILE = join(homedir(), 'play-aws.json');

const playAwsConfigZ = zod.object({
  loginType: zod.string(),
  accountIdOrAlias: zod.string(),
  username: zod.string(),
  password: zod.string(),
});
type PlayAwsConfig = zod.infer<typeof playAwsConfigZ>;

@Injectable()
export class LoginHandlerService {
  playAwsConfig: PlayAwsConfig;
  getConfiguration() {
    console.log('CONFIG_FILE', CONFIG_FILE);
    const configFile = JSON.parse(readFileSync(CONFIG_FILE, 'utf8'));
    this.playAwsConfig = playAwsConfigZ.parse(configFile);
  }
  async login(mainPage: Page) {
    await mainPage.goto('https://console.aws.amazon.com/');
    await mainPage.locator('#iam_user_radio_button').check();
    await mainPage.locator('#resolving_input').click();
    await mainPage
      .locator('#resolving_input')
      .fill(this.playAwsConfig.accountIdOrAlias);
    await mainPage.getByRole('button', { name: 'Next' }).click();
    await mainPage.getByRole('textbox', { name: 'IAM user name' }).click();
    await mainPage
      .getByRole('textbox', { name: 'IAM user name' })
      .fill(this.playAwsConfig.username);
    await mainPage.getByLabel('Password').click();
    await mainPage.getByLabel('Password').fill(this.playAwsConfig.password);
    await mainPage.getByRole('link', { name: 'Sign in', exact: true }).click();
    await mainPage.waitForNavigation();
  }
}
