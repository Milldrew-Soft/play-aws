import { Controller } from '@nestjs/common';
import { join } from 'path';
import { logFile } from './core-functions/logFile';

@Controller('command-handler')
export class CommandHandlerController {
  main(command) {
    console.log('command', command);
    switch (command) {
      case 'help':
        const helpFile = join(process.cwd(), './docs/help.txt');
        logFile(helpFile);
    }
  }
}
