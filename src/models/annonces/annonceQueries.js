import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
  } from 'graphql';

import annonceType from './annonceType'
import annonce from './annonceSchema'

import typeLogement from '../utils/typeLogementType'

export default {
  annonces: {
    type: new GraphQLList(annonceType),
    args:{
      typeLogement:{
        type:typeLogement
      }
    },
    resolve: annonce.getListOfAnnonces
  },
  // annonce: {
  //   type: annonceType,
  //   args: {
  //     id: {
  //       type: GraphQLID
  //     }
  //   },
  //   resolve: user.getUserByPosition
  // },
  annonceId: {
    type: annonceType,
    args: {
      id: {
        type: GraphQLID
      }
    },
    resolve: annonce.getAnnonceById
  }
  // },
  // userByName: {
  //   type: userType,
  //   args: {
  //     name: {
  //       type: GraphQLString
  //     }
  //   },
  //   resolve: user.getUserByName
  // }
};
