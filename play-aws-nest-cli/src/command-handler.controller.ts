import { Controller } from '@nestjs/common';
import { join } from 'path';
import { ChromiumController } from './chromium/chromium.controller';
import { logFile } from './core-functions/logFile';

@Controller('command-handler')
export class CommandHandlerController {
  main(command) {
    console.log('command', command);
    switch (command) {
      case 'help':
        const helpFile = join(process.cwd(), './docs/help.txt');
        logFile(helpFile);
        break;
      case 'practioner':
        console.log('main page goes to practioner practice exam exam');
        ChromiumController.mainPage.goto(
          'https://awscertificationpractice.benchprep.com/app/aws-certified-cloud-practitioner-official-practice-exam#exams',
        );
    }
  }
}
