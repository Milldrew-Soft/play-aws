import { Injectable } from '@nestjs/common';

@Injectable()
export class CommandPromptService {
  /**
   * play-aws>
   */
  static showCommandPrompt() {
    process.stdout.write('play-aws> ');
  }
}
