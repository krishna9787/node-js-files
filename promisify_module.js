const {readFile, writeFile} = require('fs')
const util = require('util')
const path = require('path')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const getText = async () => {
    try {
    // const file1 = await readFilePromise(path.join('content', 'subfolder', 'test.txt'), 'utf-8')
    // const file2 = await readFilePromise(path.join('content', 'subfolder', 'test2.txt'), 'utf-8')
    // await writeFilePromise(path.join('content', 'subfolder', 'promisify_output.txt'), file1 + " " + file2)
        await readFilePromise(path.join('content', 'subfolder', 'test.txt'), 'utf-8')
        .then((result) => {
            readFilePromise(path.join('content', 'subfolder', 'test2.txt'), 'utf-8')
            .then((result1) => {
                writeFilePromise(path.join('content', 'subfolder', 'promisify_output.txt'), result + " " + result1)
            })
        })
    } catch(err) {
        console.log(err)
    }
}
getText();