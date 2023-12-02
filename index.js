const express = require('express');
const server = express();

server.get('/', (req, res) => {
    return res.json({mensagem: 'API está funcionando'})
});

server.listen(3000, () => {
    console.log("Servidor está funcionando")
});

// const bodyParser = require('body-parser')
// const express = require('express')
// const cors = require('cors')
// const dotenv = require('dotenv')
// dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

// const app = express()
// app.set('trust proxy', true)

// const origin = {
//   origin: process.env.CORS_ORIGIN
// }

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(express.static('public'))
// app.use(cors(origin))

// const database = require('./src/database')

// const v1Router = require('./src/routes')
// app.use('/api', v1Router)

// app.listen(process.env.LOC_PORT_SERVER, () => {
//   console.log(`⚡️[server]: Server is running at ${process.env.LOC_PORT_SERVER}`)
// })