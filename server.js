const { ApolloServer } = require('apollo-server')
const mongoose = require('mongoose')
require('dotenv').config()
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')
const { findOrCreateUser}=require('./controllers/userController')
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
    context:({req})=>{
        let authToken=null
        try{
            authToken=req.headers.authorization
            if(authToken){
                // find or create user
                findOrCreateUser(authToken)
            }
        }catch (err){
            console.error(`Unable to authenticate user with token`)
        }
        
    }
    // context
})

server.listen().then(({ url }) => console.log(`our server listen: ${url}`))