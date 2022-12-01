import { cp } from 'fs/promises';
import { join } from 'path';
import * as url from 'url';
import { checkExist } from '../checkExist.js';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));


const copy = async () => {
    const pathToFileSrc = join(__dirname, 'files')
    const pathToFileDest = join(__dirname, 'files_copy')

    const isExistSrc = await checkExist(pathToFileSrc)
    const isExistDest = await checkExist(pathToFileDest)

    try {
        if (isExistDest || !isExistSrc) {
            throw new Error('FS operation failed')
        };

        await cp(pathToFileSrc, pathToFileDest, { recursive: true });

    } catch(error) {
        console.error(error.message)
    }

};

copy();