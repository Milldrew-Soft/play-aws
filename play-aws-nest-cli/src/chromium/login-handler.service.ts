import * as zod from 'zod';
import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { homedir } from 'os';
import { join } from 'path';
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
    console.log(configFile);

    // this.playAwsConfig = playAwsConfigZ.parse(JSON.parse(configFile));
  }
}
