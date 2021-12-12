const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
const database = require('./database')

const users = require('./userRoutes')
dotenv.config()

const port = process.env.PORT

database.connect()

app.use(cors())
app.use(express.json())

/* rotas */
app.use('/api/users', users)

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})