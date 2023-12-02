const { Sequelize } = require('sequelize')
const fs = require('fs')

const {
  LOC_DB_USER,
  LOC_DB_PASS,
  LOC_DB_HOST,
  LOC_DB_NAME,
  LOC_DIALECT,
  LOC_DB_POOL_MIN,
  LOC_DB_POOL_MAX,
  LOC_DB_POOL_IDDLE,
  LOC_DB_PORT,
  NODE_ENV,
} = process.env

const sequelize = new Sequelize(LOC_DB_NAME, LOC_DB_USER, LOC_DB_PASS, {
  host: LOC_DB_HOST,
  dialect: LOC_DIALECT,
  port: LOC_DB_PORT,
  dialectOptions: {
    multipleStatements: true,
  },
  pool: {
    max: parseInt(LOC_DB_POOL_MAX),
    min: parseInt(LOC_DB_POOL_MIN),
    idle: parseInt(LOC_DB_POOL_IDDLE)
  },
  //logging: (query) => console.log('Query: ', query, '\n'),
  logging: false,
  timezone: '-03:00',
})

const filenames = fs.readdirSync('./src/models')
filenames.map(fileName => {
  const [name, ext] = fileName.split('.')
  sequelize.models[name] = require('../src/models/' + fileName)(sequelize, Sequelize)
})

const models = sequelize.models
Object.keys(models).forEach(name => {
  if (models[name].associate != undefined) {
    models[name].associate(models)
  }
})

console.log(`⚡️[server]: Mysql connected!`)

module.exports = sequelize