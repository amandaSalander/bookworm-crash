import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID,
  GraphQLUnionType
 } from 'graphql'


import Annonced from '../utils/annoncedType' 

console.log("Annonced form memberType "+Annonced)

import annonceType from '../annonces/annonceType' 
import annonce from '../annonces/annonceSchema' 


import rendezvousType from '../rendez-vous/rendezvousType' 
import rendezvous from '../rendez-vous/rendezvousSchema' 


import mongoose from 'mongoose'

var fa= new GraphQLObjectType({
  name:"FA",
  description:"Fa type for nothing just to have a simple thing like [{id}]",
  fields:()=>({
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    id: {
      type: Annonced
    }
  })
});

var pa= new GraphQLObjectType({
  name:"PA",
  description:"Fa type for nothing just to have a simple thing like [{id}]",
  fields:()=>({
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    id: {
      type: rendezvousType
    }
  })
});


// Define our user type, with two string fields; `id` and `name`
var memberType= new GraphQLObjectType({
  name: 'Member',
  description: 'A Member, future user of our announce location application',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    id: {
      type: new GraphQLNonNull(GraphQLString)
    },
    firstname: {
      type: new GraphQLNonNull(GraphQLString)
    },
    lastname: {
      type: new GraphQLNonNull(GraphQLString)
    },
    email:{
      type: new GraphQLNonNull(GraphQLString)
    },
    tel: {
      type: new GraphQLNonNull(GraphQLString)
    },
    password: {
      type: new GraphQLNonNull(GraphQLString)
    },
    _annonces:{
        type:new GraphQLNonNull( new GraphQLList(fa))
    },
    _rdvs:{
        type:new GraphQLNonNull( new GraphQLList(pa))
    }
  })
});


export default memberType;