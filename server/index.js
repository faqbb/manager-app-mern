import express from 'express'
import http from 'http'
import cors from 'cors'
import connectToDB from './config/db.config.js'
import usersRouter from './routers/usersRouter.js'
import logRouter from './routers/logRouter.js'
import { Server } from 'socket.io'

const app = express()
const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
  }
})

// middlewares
app.use(express.json())
app.use(cors({origin: 'http://localhost:5173'}))

// Connect to DB
connectToDB()

// Routers
app.use('/users', usersRouter)
app.use('/logs', logRouter)
// app.use('/excercises', excerciseRouter)


app.get('/sayhitofront', (req, res) => {
  res.json('Hi front from the back!!!')
})


io.on('connection', (socket) => {
  console.log('A user connected');

  // Aquí puedes manejar los eventos y emitir a los clientes
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});




// Start server
const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });

  export default io