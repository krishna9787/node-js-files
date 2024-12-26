const {readFile} = require('fs')
const path = require('path')

const gettext = (path) => {
    return new Promise ((resolve, reject) => {
        readFile(path, 'utf-8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

getText(path.join('content', 'subfolder', 'text.txt'))
.then((result) => console.log(result))
.catch((err) => console.log(err))

const start = async() => {
    try {
    const first = await getText(path.join('content', 'subfolder', 'test.txt'))
    const second = await getText(path.join('content', 'subfolder', 'test2.txt'))
    console.log(first, second)
    } catch (e) {
        console.log(e)
    }
}

start()