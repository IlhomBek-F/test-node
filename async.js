const {readFile, writeFile} = require('fs');

readFile('./content/subfolder/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return;
    }
    const text = result;
    readFile('./content/subfolder/second.txt', 'utf8', (err, resuly) => {
        if (err) {
            console.log(err)
            return;
        }

        const second = resuly;

        writeFile('./content/subfolder/result-async.txt', `Here is the result: ${text} ${second}`, (err, res) => {
            if (err) {
                console.log(err);
                return;
            }

            console.log(res)
        })
    })
})