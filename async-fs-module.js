const {readFile, writeFile} = require("fs")
const path = require('path')

readFile(path.join('content', 'subfolder', 'test.txt'), 'utf-8', (err, result) => {
    if (err) throw err;
    const file1 = result
    readFile(path.join('content', 'subfolder', 'test2.txt'), 'utf-8', (err, result) => {
        if (err) throw err;
        const file2 = result
        writeFile(path.join('content', 'subfolder', 'async-output.txt'), `This is a combination of both files: ${file1}, ${file2}`, (err) => {
            if (err) throw err;
        })
    })
})