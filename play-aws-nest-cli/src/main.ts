import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppService } from './app.service';
import { CommandPromptService } from './command-prompt.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  CommandPromptService.showCommandPrompt();
}
bootstrap();
