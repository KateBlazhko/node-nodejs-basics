import { Worker } from 'worker_threads'
import { join } from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const INITIAL_NUMBER = 10
const LOGICAL_CORES = 12

const runWorker =(workerData) => {
    const pathToWorker = join(__dirname, 'worker.js')

    return new Promise((resolve, reject) => {
        const worker = new Worker(pathToWorker, { workerData });
        worker.on('message', resolve);
        worker.on('error', reject);
        worker.on('exit', (code) => {
          if (code !== 0)
            reject(new Error(`Worker stopped with exit code ${code}`));
        })
    })
}

const performCalculations = async () => {
    const resultArr = []
    for (let i = 0; i < LOGICAL_CORES; i++) {
        try {
            const result = await runWorker(INITIAL_NUMBER + i)
            resultArr.push({status: 'resolved', data: result.result})
        }
        catch (error) {
            resultArr.push({status: 'error', data: null})
    
        }
    }
    console.log(resultArr)

};

await performCalculations();