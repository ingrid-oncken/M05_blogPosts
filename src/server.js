import express from "express"

const port = 3001

const server = express()

server.listen(port, () => {
  console.log("server is listening the port " + port)
})
