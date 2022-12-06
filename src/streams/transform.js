import { stdout, stdin } from 'process';
import * as url from 'url';
import { Transform, pipeline } from 'stream';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const transform = async () => {
    const reverseStream = new Transform({transform(chunk, encoding, callback) {
        callback(null, chunk.toString().split('').reverse().join(''))
    }})
    pipeline(stdin, reverseStream, stdout, (err) => err && console.error(err.message))
};

await transform();