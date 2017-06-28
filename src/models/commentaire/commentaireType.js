import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
 } from 'graphql'

import Annonced from '../utils/annoncedType' 
import ProprietaireType from '../utils/proprieatireType'

// Define our user type, with two string fields; `id` and `name`
export default new GraphQLObjectType({
  name: 'Commentaire',
  description: 'User object',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    id: {
      type: GraphQLString
    },
    _de: {
      type: ProprietaireType
    },
    _annonce:{
      type: Annonced
    },
    note: {
      type: GraphQLInt
    },
    description: {
      type: GraphQLString
    }
  })
});
