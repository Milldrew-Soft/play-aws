import { Controller } from '@nestjs/common';

@Controller('command-handler')
export class CommandHandlerController {
  main(command) {
    console.log(`command: ${command}`);
  }
}
