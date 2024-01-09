const {MONGODB_URI, PORT} = require('./utils/config')
const express = require('express')
const mongoose = require('mongoose')
const middlewares = require('./utils/middlewares')
const personsRouter = require('./routes/persons')
const infoRouter = require('./routes/info')



// Connect to database
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

// Create and init server
const app = express()

app.use(express.json())
app.use(middlewares.logger)
app.use(middlewares.attachCurrentuser)

app.use('/api/persons', personsRouter)
app.use(infoRouter)

app.use(middlewares.errorHandler)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})