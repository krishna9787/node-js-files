const EventEmitter = require('events')

const customerEmitter = new EventEmitter()

customerEmitter.on('response', (name,id) => {
    console.log(`Data received user: ${name} with id: ${id}`)
})

customerEmitter.on ('response', () => {
    console.log("Some other code")
})

customerEmitter.emit('response', 'john', 23)