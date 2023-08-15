import * as zod from 'zod';
import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { homedir } from 'os';
import { join } from 'path';
import { Page } from 'playwright';
const CONFIG_FILE = join(homedir(), 'play-aws.json');

const playAwsConfigZ = zod.object({
  loginType: zod.string().refine((v) => ['IAM', 'root'].includes(v)),
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
    const configFileString = readFileSync(CONFIG_FILE, 'utf8');
    const configFile = JSON.parse(configFileString);
    try {
      this.playAwsConfig = playAwsConfigZ.parse(configFile);
    } catch (e) {
      console.error(
        `The config file is invalid: ${CONFIG_FILE}: ${configFileString}`,
        e,
      );
      process.exit(1);
    }
  }
  async login(mainPage: Page) {
    await mainPage.goto('https://console.aws.amazon.com/');
    if (this.playAwsConfig.loginType === 'IAM') {
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
      await mainPage
        .getByRole('link', { name: 'Sign in', exact: true })
        .click();
      await mainPage.waitForNavigation();
    } else if (this.playAwsConfig.loginType === 'root') {
      await mainPage.getByPlaceholder('username@example.com').click();
      await mainPage
        .getByPlaceholder('username@example.com')
        .fill(this.playAwsConfig.username);
      await mainPage.getByPlaceholder('username@example.com').press('Enter');
      await mainPage.locator('#password').click();
      await mainPage.locator('#password').fill(this.playAwsConfig.password);
      await mainPage.locator('#password').press('Enter');
    }
  }
}
