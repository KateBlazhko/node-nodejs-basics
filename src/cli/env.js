const parseEnv = () => {
    Object.entries(process.env)
        .filter(([key]) => key.startsWith('RSS_'))
        .map(([nameEnv, valueEnv], index, array) => {
            process.stdout.write(`${nameEnv}=${valueEnv}`)
            index < array.length -1 ? process.stdout.write(`; `) : process.stdout.write(`\n`)
        })

};

parseEnv();