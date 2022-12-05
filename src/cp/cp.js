import { fork } from 'child_process';
import { join } from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const spawnChildProcess = async (args) => {
    const pathToChild = join(__dirname, 'files/script.js')

    fork(pathToChild, args)
};

spawnChildProcess();