import { promises } from 'fs';
import { join } from 'path';
import * as url from 'url';
import { checkExist } from '../checkExist.js';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const rename = async () => {
    const pathToFileOld = join(__dirname, 'files/wrongFilename.txt')
    const pathToFileNew = join(__dirname, 'files/properFilename.md')

    const isExistOld = await checkExist(pathToFileOld)
    const isExistNew = await checkExist(pathToFileNew)

    try {
        if (isExistNew || !isExistOld) {
            throw new Error('FS operation failed')
        };

        await promises.rename(pathToFileOld, pathToFileNew);

    } catch(error) {
        console.error(error.message)
    }
}
await rename();