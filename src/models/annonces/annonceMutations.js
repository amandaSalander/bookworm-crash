import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
  } from 'graphql';

import annonceType from './annonceType';
import annonce from './annonceSchema';

export default {
  addAnnonce:{
    type:annonceType,
    args: {
      wilaya:{
        name:'name',
        type:new GraphQLNonNull(GraphQLString)
      },
      commune:{
        name:'email',
        type: new GraphQLNonNull(GraphQLString)
      },
      description: {
        name:'tel',
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    resolve: annonce.addAnnonce
  },
  updateAnnonce:{
    type:annonceType,
    args: {
      id:{
        type: GraphQLID
      },
      wilaya:{
        name:'name',
        type:new GraphQLNonNull(GraphQLString)
      },
      commune:{
        name:'email',
        type: new GraphQLNonNull(GraphQLString)
      },
      description: {
        name:'tel',
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    resolve: annonce.updateAnnonce
  }
};
