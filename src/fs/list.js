import fs from 'fs/promises';
import { join } from 'path';
import * as url from 'url';
import { checkExist } from '../checkExist.js';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const list = async () => {
    const pathToFile = join(__dirname, 'files')

    try {
        if (!(await checkExist(pathToFile))) {
            throw new Error('FS operation failed')
        };

        const dir = await fs.opendir(pathToFile);

        for await (const item of dir) {
            console.log(item.name);
        }

    } catch(error) {
        console.error(error.message)
    }
};

await list();