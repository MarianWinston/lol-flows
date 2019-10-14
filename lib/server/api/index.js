const express = require('express')
const summoner = require('./summoner.js')

const api = express.Router()

api.use('/summoner', summoner)

module.exports = api
