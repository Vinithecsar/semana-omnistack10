const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const http = require('http')

const routes = require('./routes')
const { setupWebSocket } = require('./websocket')

const app = express()
const server = http.Server(app)

setupWebSocket(server)

mongoose.connect('mongodb+srv://vinics:vinics1510@cluster0.si25rhs.mongodb.net/week10?retryWrites=true&w=majority')

app.use(cors())
app.use(express.json())
app.use(routes)

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros: (get) request.query (Filtros, ordneação, paginação, ...)

// Query Params: (put e DELETE)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: (POST ou PUT) request.body (dados para criação ou alteração de um registro)

// MongoDB (não-relacional)


server.listen(3333)
