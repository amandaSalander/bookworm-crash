import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID,
  GraphQLDate,
  GraphQLBoolean
 } from 'graphql'


import proprieatireType from '../utils/proprieatireType'
import annoncedType from '../utils/annoncedType'
import annonceType from '../annonces/annonceType'

// Define our user type, with two string fields; `id` and `name`
export default new GraphQLObjectType({
  name: 'RendezVous',
  description: 'RendezVous object',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    id: {
      type: new GraphQLNonNull(GraphQLString)
    },
    _de:{
      // type: new GraphQLNonNull(GraphQLString)
      type: new GraphQLNonNull(proprieatireType)
    },
    _avec:{
      type: new GraphQLNonNull(proprieatireType)
    },
    _annonce:{
      type: new GraphQLNonNull(GraphQLString)
      // type: new GraphQLNonNull(annoncedType)
    },
    date:{
      type: GraphQLString
    },
    description:{
      type: GraphQLString
    },
    etat:{
      type: GraphQLString
    }
  }),
  inputFields:()=>({
    withAttente:GraphQLBoolean
  }),
  outputFields:()=>({
    withAttente:GraphQLBoolean
  })
});