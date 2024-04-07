require('dotenv').config()
const http = require('http')
const connection = require('./db')
const PORT = process.env.PORT || 5000

const requestListener = (req, res) => {
	res.writeHead(200)
	res.end('Welcome')
}
connection()
const server = http.createServer(requestListener)
const start = () => {
	try {
		server.listen(PORT, () => {
			console.log(`Server is runnung on PORT:${PORT}`)
		})
	} catch (e) {
		console.log(e)
	}
}
start()
// andreypetrishin21 admin
// IRBevBdKaw83m1Ly
