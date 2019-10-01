const fs = require('fs')
const path = require('path')

const envLoc = path.join(process.cwd(), '.env')

if (process.env.NODE_ENV !== 'production' && fs.existsSync(envLoc)) {
	const env = fs.readFileSync(envLoc).toString()
	const lines = env.split('\n').filter(Boolean)
	for (const line of lines) {
		const [key, ...val] = line.split('=')
		process.env[key] = val.join('=')
		// add logger here
	}
}
