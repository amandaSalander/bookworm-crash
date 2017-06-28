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

import commentaire from './commentaireSchema'
import commentaireType from './commentaireType'

export default {
  addCommentaire:{
    type:commentaireType,
    args: {
      _de:{
        name:'_de',
        type:new GraphQLNonNull(GraphQLString)
      },
      _annonce:{
        name:'_annonce',
        type: new GraphQLNonNull(GraphQLString)
      },
      note: {
        name:'note',
        type: GraphQLInt
      },
      description:{
        name:'description',
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    resolve: commentaire.addCommentaire
  }
}
