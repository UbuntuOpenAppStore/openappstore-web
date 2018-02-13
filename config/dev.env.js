'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API: JSON.stringify('http://local.open-store.io'),
  UPLOADCARE_KEY: JSON.stringify(process.env.UPLOADCARE_KEY),
})
