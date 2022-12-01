const parseArgs = () => {
    const args = process.argv.slice(2)
    args.forEach((arg, index, arr) => {
        if (index === arr.length - 1) {
            process.stdout.write(`${arg}\n`)
            return 
        }

        if (index % 2 === 0) {
            process.stdout.write(`${arg.slice(2)} is `)
        } else {
            process.stdout.write(`${arg}, `)
        }
    })
};

parseArgs();