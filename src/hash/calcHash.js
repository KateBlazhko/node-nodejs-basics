import fs from 'fs/promises';
import { join } from 'path';
import * as url from 'url';
import { checkExist } from '../checkExist.js';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const {
    createHash,
  } = await import('crypto');
  

const calculateHash = async () => {
    const hash = createHash('sha256');
    const pathToFile = join(__dirname, 'files/fileToCalculateHashFor.txt')

    try {
        if (!(await checkExist(pathToFile))) {
            throw new Error('FS operation failed')
        };

        const data = await fs.readFile(pathToFile, { encoding: 'utf8' });
        hash.update(data);
        console.log(hash.copy().digest('hex'));

    } catch(error) {
        console.error(error.message)
    }

};

await calculateHash();