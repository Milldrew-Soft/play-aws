import { Module } from '@nestjs/common';
import { CommandPromptService } from './command-prompt.service';
import { CommandHandlerController } from './command-handler.controller';
import { ChromiumController } from './chromium/chromium.controller';
import { LoginHandlerService } from './chromium/login-handler.service';
import { PracticeExamsService } from './practice-exams.service';

@Module({
  imports: [],
  controllers: [CommandHandlerController, ChromiumController],
  providers: [CommandPromptService, LoginHandlerService, PracticeExamsService],
})
export class AppModule {}
