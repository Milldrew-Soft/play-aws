import { Module } from '@nestjs/common';
import { CommandPromptService } from './command-prompt.service';
import { CommandHandlerController } from './command-handler.controller';
import { ChromiumController } from './chromium/chromium.controller';
import { LoginHandlerService } from './chromium/login-handler.service';

@Module({
  imports: [],
  controllers: [CommandHandlerController, ChromiumController],
  providers: [CommandPromptService, LoginHandlerService],
})
export class AppModule {}
