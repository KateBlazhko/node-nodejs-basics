import { createGzip } from 'zlib'
import {pipeline} from 'stream'
import {createReadStream,createWriteStream } from 'fs';
import { join } from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const compress = async () => {
    const pathToFileSrc = join(__dirname, 'files/fileToCompress.txt')
    const pathToFileDest = join(__dirname, 'files/archive.gz')

    const gzip = createGzip();
    const source = createReadStream(pathToFileSrc);
    const destination = createWriteStream(pathToFileDest);

    pipeline(source, gzip, destination, (err) => err && console.error(err.message));
};

await compress();