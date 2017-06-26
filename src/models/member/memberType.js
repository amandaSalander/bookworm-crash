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



import annonceType from '../annonces/annonceType' 
import annonce from '../annonces/annonceSchema' 



import mongoose from 'mongoose'



// Define our user type, with two string fields; `id` and `name`
export default new GraphQLObjectType({
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
        type: new GraphQLList(annonceType)
    }
  })
});