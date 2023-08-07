import { Module } from '@nestjs/common';
import { CommandPromptService } from './command-prompt.service';
import { CommandHandlerController } from './command-handler.controller';

@Module({
  imports: [],
  controllers: [CommandHandlerController],
  providers: [CommandPromptService],
})
export class AppModule {}
