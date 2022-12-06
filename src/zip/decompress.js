import { createGunzip } from 'zlib'
import {pipeline} from 'stream'
import {createReadStream,createWriteStream } from 'fs';
import { join } from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const decompress = async () => {
    const pathToFileSrc= join(__dirname, 'files/archive.gz')
    const pathToFileDest = join(__dirname, 'files/fileToCompress.txt')

    const gunzip = createGunzip();
    const source = createReadStream(pathToFileSrc);
    const destination = createWriteStream(pathToFileDest);

    pipeline(source, gunzip, destination, (err) => err && console.error(err.message));

};

await decompress();