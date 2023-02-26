const express = require("express")
const app = express()
const port = 3001
const http = require("http")
const cors = require("cors")
const { Server } = require("socket.io")

app.use(cors())

const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173", "https://request-rave.onrender.com", "https://request-rave.vercel.app"],
    methods: ["GET", "POST"]
  }
})

let storedIds = []

io.on("connection", (socket) => {
  socket.on("song-id", (data) => {
    storedIds.push(data)
    io.emit("receive-id", data)

    // Set timeout to remove the request after 30 minutes
    setTimeout(() => {
      const index = storedIds.indexOf(data)
      if (index !== -1) {
        storedIds.splice(index, 1)
        io.emit("remove-id", data)
      }
    }, 30 * 60 * 1000) // 30 minutes in milliseconds
  })

  socket.on("remove-song", (id) => {
    const index = storedIds.indexOf(id);
    if (index !== -1) {
      storedIds.splice(index, 1);
      io.emit("remove-id", id);
    }
  });
  
  socket.on("get-stored-ids", () => {
    // Send the stored messages to the client
    socket.emit("stored-ids", storedIds)
  })

  socket.on("disconnect", () => {
    console.log(`Socket ${socket.id} disconnected`)
  })
})

server.listen(port, () => {
  console.log(`server running on port ${port}`)
})
