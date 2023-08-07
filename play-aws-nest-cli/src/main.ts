import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CommandPromptService } from './command-prompt.service';
import { mainStandardInStream } from './standard-in-stream-handler';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  CommandPromptService.showCommandPrompt();
  mainStandardInStream.on('data', (commandBuffer) => {
    const command = commandBuffer.toString().trim();

    CommandPromptService.showCommandPrompt();
  });
}
bootstrap();
