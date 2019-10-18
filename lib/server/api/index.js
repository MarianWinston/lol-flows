const express = require('express')
const champions = require('./champions.js')

const api = express.Router()

// api.use('/', (req, res) => {
//     res.send(console.log('Welcome home'))
// })

api.use('/champions', champions)

module.exports = api