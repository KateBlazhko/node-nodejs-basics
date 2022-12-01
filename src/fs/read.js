import fs from 'fs/promises';
import { join } from 'path';
import * as url from 'url';
import { checkExist } from './checkExist.js';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const read = async () => {
    const pathToFile = join(__dirname, 'files/fileToRead.txt')

    try {
        if (!(await checkExist(pathToFile))) {
            throw new Error('FS operation failed')
        };

        const contents = await fs.readFile(pathToFile, { encoding: 'utf8' });
        console.log(contents);

    } catch(error) {
        console.error(error.message)
    }
};

await read();