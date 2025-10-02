const express =require('express');
const app = express();

const {Server}=require('socket.io');
const path= require('path');    
const http = require('http')
const server = http.createServer(app);
const io = new Server(server); 

//socket.io
io.on('connection',(socket)=>{
    socket.on('chat message',(msg)=>{
        console.log("A new user message",msg);
        io.emit('chat message',msg);
    })
})
app.use(express.static(path.resolve('./public'))); 
server.listen(9000, () => {
  console.log('Server is running on http://localhost:9000');
});

app.get('/', (req, res) => {
 return res.sendFile('./public/index.html');
});
