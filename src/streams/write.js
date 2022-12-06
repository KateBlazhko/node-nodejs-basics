import fs from 'fs';
import { join } from 'path';
import { stdout, stdin, exit } from 'process';
import readline from 'readline'
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const write = async () => {
    const pathToFile = join(__dirname, 'files/fileToWrite.txt');

    const rl = readline.createInterface(stdin, stdout);
    const writeStream = fs.createWriteStream(pathToFile, 'utf-8');

    console.log('Hello, please type some text');

    rl.on('line', data => {
        writeStream.write(data + '\n');
        return stdout.write('Would you like to continue typing?\n');
      });

    rl.on('SIGINT', () => {
        stdout.write('\n')
        writeStream.emit('end'); 
      });

    writeStream.on('end', () => {
    stdout.write('Your file is ready!\n');
    exit();
    });

    writeStream.on('error', error => console.error(error.message));
    rl.on('error', error => console.error(error.message));
};

await write();