const express = require('express')
const app = express()

const rowdy = require ('rowdy-logger')
const routesReport = rowdy.begin(app)


app.use(express.json())
app.use(require('cors')())

// const jwt = require('jsonwebtoken')

const userRoutes = require('./routes/userRoutes')
const businessRoutes = require('./routes/businessRoutes')
const reviewRoutes = require('./routes/reviewRoutes')
app.use('/users', userRoutes)
app.use('/businesses', businessRoutes)
app.use('/reviews', reviewRoutes)


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`port running on ${PORT}`)
  routesReport.print()
})