const express = require('express')
const graphqlHTTP = require('express-graphql')

const schema = require('./schema/schema')

const app = express()

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
})) // middleware for listen graphql

app.listen(4000, () => console.log('the server is running on port 4000'))