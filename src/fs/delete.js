import fs from 'fs/promises';
import { join } from 'path';
import * as url from 'url';
import { checkExist } from '../checkExist.js';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const remove = async () => {
    const pathToFile = join(__dirname, 'files/fileToRemove.txt')

    try {
        if (!(await checkExist(pathToFile))) {
            throw new Error('FS operation failed')
        };

        await fs.rm(pathToFile);

    } catch(error) {
        console.error(error.message)
    }
};

await remove();