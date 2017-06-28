// Import GraphQL and destructure for easy access
import {
  GraphQLObjectType,
  GraphQLSchema
 } from 'graphql'

//import model
import member from './models/member/memberSchema'
import annonce from './models/annonces/annonceSchema'

import user from './models/user/userSchema'


// Import mongoose to connect to MongoDB
import mongoose from 'mongoose'

// Import express-graphql an easy express integration of https://github.com/graphql/graphiql
import graphqlHTTP from 'express-graphql'

// Import GraphQL Queries
import userQueries from './models/user/userQueries'
import annonceQueries from './models/annonces/annonceQueries'
import memberQueries from './models/member/memberQueries'
import rendezvousQueries from './models/rendez-vous/rendezvousQueries'

// Import GraphQL Mutations
import userMutations from './models/user/userMutations'
import annonceMutations from './models/annonces/annonceMutations'
import memberMutations from './models/member/memberMutations'
// import typeLogementMutations from './models/utils/typeLogementMutations'
import rendezvousMutations from './models/rendez-vous/rendezvousMutations'
import commentaireMutations from './models/commentaire/commentaireMutations'



const cors = require('cors');

// Setup GraphQL RootQuery
let RootQuery = new GraphQLObjectType({
  name: 'Query',
  description: 'Realize Root Query',
  fields: () => ({
    user: userQueries.user,
    users: userQueries.users,
    userId: userQueries.userId,
    userByName: userQueries.userByName,
    annonces: annonceQueries.annonces,
    annonceId:annonceQueries.annonceId,
    members:memberQueries.members,
    memberId:memberQueries.memberId,
    memberEmail:memberQueries.memberEmail,
    RDVs:rendezvousQueries.RDVs
  })
})

// Setup GraphQL RootMutation
let RootMutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Realize Root Mutations',
  fields: () => ({
    addUser: userMutations.addUser,
    updateUser: userMutations.updateUser,
    addAnnonce:annonceMutations.addAnnonce,
    updateAnnonce:annonceMutations.updateAnnonce,
    addMember: memberMutations.addMember,
    addAnnonceToMember:memberMutations.addAnnonce,
    memberId:memberQueries.memberId,
    // addType:typeLogementMutations.addType,
    addRDV:rendezvousMutations.addRendezVous,
    updateRDV:rendezvousMutations.updateRDV,
    addCommentaire:commentaireMutations.addCommentaire

    
  }),
  outputFields:()=>({
    incremterVue:annonceMutations.incremterVue,
  })
})

// Set up GraphQL Schema with our RootQuery and RootMutation
let schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
})

// Import express server
import express from 'express'

// Connect MongoDB with Mongoose
mongoose.connect('mongodb://localhost/graphql-express-mongodb')



var db = mongoose.connection;
mongoose.Promise = global.Promise;


db.on('error', console.error.bind(console, 'connection error:'));


db.once('open', function() {
    console.log('Connected to MongoDB');




  // Set up Express and integrate with our GraphQL Schema and configure to use graphiql
  var app = express()
  app.use('/graphql',cors(), graphqlHTTP({ schema: schema, graphiql: true }))
  app.listen('3000')

  var status = {
    Express: {
      "Online": true,
      "Port": 3000
    },
    "GraphiQL": {
      "url": "http://localhost:3000/graphql"
    }
  }
  console.dir(status, {depth: null, colors: true })
});

