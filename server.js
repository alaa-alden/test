const { ApolloServer } = require('apollo-server')
const mongoose = require('mongoose')
require('dotenv').config()
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    // useNewUrlParser:
}).then(() => {
    console.log('DB connected!')
}).catch(err => console.log(err))
const server = new ApolloServer({
    typeDefs,
    resolvers,
    // context
})

server.listen().then(({ url }) => console.log(`our server listen: ${url}`))