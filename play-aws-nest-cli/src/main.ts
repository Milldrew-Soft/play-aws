import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CommandHandlerController } from './command-handler.controller';
import { CommandPromptService } from './command-prompt.service';
import { mainStandardInStream } from './standard-in-stream-handler';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  CommandPromptService.showCommandPrompt();
  const commandHandler = app.get(CommandHandlerController);
  mainStandardInStream.on('data', (commandBuffer) => {
    const command = commandBuffer.toString().trim();
    CommandPromptService.showCommandPrompt();
    commandHandler.main(command);
  });
}
bootstrap();
