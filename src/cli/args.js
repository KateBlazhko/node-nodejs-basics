const parseArgs = () => {
    process.argv
        .slice(2)
        .forEach((arg, index, arr) => {
            if (index === arr.length - 1) {
                process.stdout.write(`${arg}\n`)
                return 
            }

            index % 2 === 0 ? process.stdout.write(`${arg.slice(2)} is `) : process.stdout.write(`${arg}, `)
        })
};

parseArgs();