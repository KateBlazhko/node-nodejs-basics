import { Worker } from 'worker_threads'
import { join } from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const INITIAL_NUMBER = 10
const LOGICAL_CORES = 12

const runWorker =(workerData) => {
    const pathToWorker = join(__dirname, 'worker.js')

    return new Promise((resolve) => {
        const worker = new Worker(pathToWorker, { workerData });
        worker.on('message', (value) => resolve({ status: 'resolved', data: value.result }));
        worker.on('error', () => resolve({ status: 'error', data: null }));
    })
}

const performCalculations = async () => {
    const resultArr = await Promise.all(
        [...Array(LOGICAL_CORES).keys()].map(async (item) => await runWorker(INITIAL_NUMBER + item))
    )

    console.log(resultArr)
};

await performCalculations();