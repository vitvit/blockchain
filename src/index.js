const config     = require('yaml-config').readConfig('./config/config.yml')
const HttpServer = require('./httpServer')
const Blockchain = require('./blockchain')
const Miner      = require('./miner')
const Node       = require('./node')
const MongoDb    = require('./db')

const host  = process.env.HOST || config.host ||'localhost'
const port  = process.env.PORT || config.port || process.env.HTTP_PORT || 3001
const peers = (process.env.PEERS ? process.env.PEERS.split(',') : [])
                .map(url => {
                  return { url }
                })

const logLevel = (process.env.LOG_LEVEL ? process.env.LOG_LEVEL : 6)
const name     = process.env.NAME || '1'

console.info(`Starting node ${name}`)

const blockchain = new Blockchain()
const miner      = new Miner()
const node       = new Node()
const httpServer = new HttpServer();

const dbConfig = config.database

MongoDb.initDb(`mongodb://${dbConfig.host}:${dbConfig.port}/${dbConfig.name}`)
  .then(()   => httpServer.listen(host, port))
  .catch((e) => console.log(e))