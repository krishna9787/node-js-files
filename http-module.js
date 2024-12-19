const http = require('http')

const server = http.createServer((req, res) => {
if (req.url === '/'){
    res.end('Welcome!!!')
} else if (req.url === '/about') {
    res.end(`Short history`)
} else {
    res.end(`
        <h1>Oops!</h1>
        <p>Wrong page</p>
        <a href="/">back to home</a>
        `)
}

})

server.listen(5000)