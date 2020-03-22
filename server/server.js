const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const { globalErrorHandler } = require('./middleware')

const app = express()

// Middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.json({ extended: false }))

// Routes
app.use('/api/v1/email', require('./routes/email'))

app.use(globalErrorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}...`)
})
