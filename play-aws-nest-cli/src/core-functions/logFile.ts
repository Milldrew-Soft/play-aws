import { spawnSync } from 'child_process';

export function logFile(filePath) {
  spawnSync('cat', [filePath], {
    stdio: 'inherit',
  });
}
