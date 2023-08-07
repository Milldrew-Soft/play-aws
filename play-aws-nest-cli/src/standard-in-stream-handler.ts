import { Readable } from 'stream';

/**
 * This stream is used in the main.ts file within the bootstrap function.
 */
export const mainStandardInStream = new Readable({
  read() {},
});
process.stdin.on('data', (data) => {
  const word = data.toString().trim();
  mainStandardInStream.push(data);
});
