const express = require('express')
const API_KEY=process.env.API_KEY

console.log(API_KEY)

const api = express.Router()

api.use('/', (req, res) => {
	res.send('welcome to APIv1')
})

module.exports = api
