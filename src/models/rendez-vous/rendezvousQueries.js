import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID,
  GraphQLBoolean
  } from 'graphql';

import rendezvousType from './rendezvousType'
import rendezvous from './rendezvousSchema'

import etatRDV from '../utils/etatRDVType'

export default {
  RDVs: {
    type: new GraphQLList(rendezvousType),
    args:{
      avecEtat:{
        name:"avecEtat",
        type:etatRDV
      }
    },
    resolve: rendezvous.getListOfRDVs
  }
}