const parseEnv = () => {
    const allEnvs = process.env
    for (const oneEnv in allEnvs) {
        if (oneEnv.startsWith('RSS_')) {
            process.stdout.write(`${oneEnv}=${allEnvs[oneEnv]}; `)
        }
    }
};

parseEnv();