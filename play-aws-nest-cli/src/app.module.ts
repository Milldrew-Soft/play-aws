import { Module } from '@nestjs/common';
import { CommandPromptService } from './command-prompt.service';

@Module({
  imports: [],
  controllers: [],
  providers: [CommandPromptService],
})
export class AppModule {}
