import { fork } from 'child_process';
import { join } from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const spawnChildProcess = async (args) => {
    const pathToChild = join(__dirname, 'files/script.js')

    const child = fork(pathToChild, args)
    child.on('error', (error) => console.log(error.message))
};

spawnChildProcess(['myArgs']);