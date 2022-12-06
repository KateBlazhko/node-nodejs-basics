import fs from 'fs';
import { join } from 'path';
import { stdout } from 'process';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const read = async () => {
    const pathToFileSrc = join(__dirname, 'files/fileToRead.txt')
    const readStream = fs.createReadStream(pathToFileSrc, 'utf8');

    readStream.pipe(stdout)
    readStream.on('error', error => console.error(error.message));
};

await read();