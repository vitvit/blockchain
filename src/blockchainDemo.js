const HttpServer = require('./httpServer')

const host = process.env.HOST || 'localhost'
const port = process.env.PORT || process.env.HTTP_PORT || 3001
/*peers = (process.env.PEERS ? process.env.PEERS.split(',') : [])
peers = peers.map((peer) => { 
	return { url: peer }; 
});
logLevel = (process.env.LOG_LEVEL ? process.env.LOG_LEVEL : 6);*/
const name = process.env.NAME || '1'

console.info(`Starting node ${name}`)

const httpServer = new HttpServer()

httpServer.listen(host, port)