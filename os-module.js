const os = require('os')

const osDetails = {
    user: os.userInfo(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(osDetails)