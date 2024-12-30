const {createReadStream} = require('fs')
const path = require('path')
const http = require('http')

//const stream = createReadStream(path.join('content', 'subfolder', "largeFile.txt")) //65kb retrieved each time
//const stream = createReadStream(path.join('content', 'subfolder', "largeFile.txt"), {highWaterMark: 90000}) //90kb retrieved each time
const server = http.createServer()

server.on('request', (req, res) => {
    const stream = createReadStream(path.join('content', 'subfolder', "largeFile.txt"), {encoding: 'utf-8'}, {highWaterMark: 90000})
    stream.on('data', (result) => {
        res.end(result)
    })
})

server.listen(5000)











// const {writeFileSync} = require('fs')
// const path = require('path')


// for (let i = 0 ; i < 10000; i++) {
//     writeFileSync(path.join('content', 'subfolder', 'largeFile.txt'), `Text entered ${i}\n`, {flag: 'a'})
// }