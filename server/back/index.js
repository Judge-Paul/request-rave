const express = require("express")
const app = express()
const port = 3001
const http = require("http")
const cors = require('cors')
const { Server } = require("socket.io")
app.use(cors())
const server = http.createServer(app)


const io = new Server(server, {
    cors:{
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    }
})
io.on("connection",(socket)=>{
    console.log(`User connected: ${socket.id}`)
   socket.on("join_room",(data)=>{
    socket.join(data)
    console.log(`user with id: ${socket.id} joined room: ${data}`)
   })
   socket.on("send_message",(data)=>{
    socket.to(data.room).emit("receive_msg", data)
    
   })

    socket.on("disconnect",()=>{
        console.log("User disconnected", socket.id)
    })
})



server.listen(port,()=>{
    console.log(`server runing on port ${port}`)
})