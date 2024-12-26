const {readFile} = require('fs')
const path = require('path')

const getText = (path1) => {
    return new Promise((resolve, reject) => {
        readFile(path1, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            } else{
            resolve(data);
            }
        })
    })
}

getText(path.join('content', 'subfolder', 'test.txt'))
.then(result => console.log(result))
.catch(err => console.log(err))

const start = async() =>{
    const first = getText
}