import { writeFile } from 'fs/promises';
import { join } from 'path';
import * as url from 'url';
import { checkExist } from '../checkExist.js';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const create = async () => {
    const pathToFile = join(__dirname, 'files/fresh.txt')

    try {
        if (await checkExist(pathToFile)) {
            throw new Error('FS operation failed')
        };

        const data = 'I am fresh and young'
        const newFile = await writeFile(pathToFile, data);

    } catch(error) {
        console.error(error.message)
    }
};

await create();