const express = require('express') 
const app = express() 
const http = require('http') 
const server = http.createServer(app) 
const { Server } = require('socket.io') 
const io = new Server(server) 
const POST = 4000 
server.listen(POST, () => { 
    console.log(`server is running on http://localhost:${POST}`);
})

app.get('/', (req, res) => { 
    res.sendFile(__dirname+'/index.html')
})

const salesNSP = io.of('/sales') 
salesNSP.on('connection', (socket) => { 
    salesNSP.emit('salesMsg', 'I am from sales name space')
})


const marketingNSP = io.of('/marketing') 
marketingNSP.on('connection', (socket) => { 
       marketingNSP.emit('marketingMsg', 'I am from marketing name space')
  })
