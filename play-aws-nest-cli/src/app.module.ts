import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommandPromptService } from './command-prompt.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, CommandPromptService],
})
export class AppModule {}
