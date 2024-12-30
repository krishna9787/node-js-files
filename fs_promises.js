const {readFile, writeFile} = require('fs').promises
const path = require('path')

const getText = async () => {
    const file1 = await readFile(path.join('content', 'subfolder', 'test.txt'), 'utf-8')
    const file2 = await readFile(path.join('content', 'subfolder', 'test2.txt'), 'utf-8')
    await writeFile(path.join('content', 'subfolder', 'fs_promise_output.txt'), file1 + " " + file2, {flag:'a'})
}
getText();