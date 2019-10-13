const express = require('express')
const fetch = require('node-fetch');
const bodyParser = require('body-parser');

const API_KEY='RGAPI-ca29bcfc-156d-4909-ae9a-94d776c9e03e'

const api = express.Router()

api.use(bodyParser.json({
	extended: false
  }));

api.get('/', main)

async function main(req, res) {
	fetch(`https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/Nm8KogH7wcAw1CYzU47X72JjE7Qga4LvfmaGj-tAVaIZMGs?api_key=RGAPI-ca29bcfc-156d-4909-ae9a-94d776c9e03e`)
		.then(urlResponse => urlResponse.json())
		.then(reponseJson => res.send(reponseJson))
		.catch(e => console.error(e))
}

module.exports = api
