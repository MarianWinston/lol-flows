const express = require('express')
const summoner = require('./summoner')

const api = express.Router()

api.use('/', (req, res) => {
	res.send('welcome to APIv1')
})

api.use('/summoner', summoner)

module.exports = api
