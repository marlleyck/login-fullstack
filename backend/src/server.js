const express = require('express')
const cors = require('cors')

const db = require('./database')

const router = require('./routes')

const app = express()

// Express configs
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router)

db.sync().then(() => {
    app.listen(8080, () => console.log('Server is running...'))
})
