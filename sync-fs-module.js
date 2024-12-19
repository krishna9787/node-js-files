const {readFileSync, writeFileSync, write} = require("fs")
const path = require("path")

const file1 = readFileSync(path.join('content', 'subfolder', 'test.txt'))
const file2 = readFileSync(path.join('content', 'subfolder', 'test2.txt'))

writeFileSync(path.join('content', 'subfolder', 'sync_output.txt'), `This is a combination of both files: ${file1}, ${file2}`)
