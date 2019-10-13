const express = require('express')

const {API_KEY} = process.env

const api = express.Router()

api.use('/', (req, res) => {
	res.send('welcome to APIv1')
})

api.get('/', async (req, res) => {
	fetch('')
    	.then((urlResponse) => urlResponse.json())
    	.then((reponseJson) => res.send(reponseJson))
    	.catch((e) => res.status(500).send({
      		error: e.message,
    	}))
})

module.exports = api
