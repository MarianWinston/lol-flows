const express = require('express')
const fetch = require('node-fetch')
const api = express.Router()

async function main(req, res) {
	let data = null

	try {
		const urlRespose = await fetch(`https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/Nm8KogH7wcAw1CYzU47X72JjE7Qga4LvfmaGj-tAVaIZMGs?api_key=${API_KEY}`)
		const reponseJson = await urlRespose.json()
		data = reponseJson
	} catch (e) {
		console.error(e)
	}
	res.send(data)
}

api.get('/', main)

module.exports = api