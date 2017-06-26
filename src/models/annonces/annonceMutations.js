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

import typeLogement from '../utils/typeLogementType'

export default {
  addAnnonce:{
    type:annonceType,
    args: {
      _proprietaire:{
        name:"_proprietaire",
        type:new GraphQLNonNull(GraphQLString)
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
      },
      vue:{
        name:"vue",
        type: GraphQLInt
      },
      superficie:{
        name:"superficie",
        type: GraphQLInt
      },
      note:{
        name:"note",
        type: GraphQLInt
      },
      adresse: {
        name:"adresse",
        type: GraphQLString
      },
      typeLogement:{
        type:typeLogement
      }
    },
    resolve: annonce.addAnnonce
  },
  updateAnnonce:{
    type:annonceType,
    args: {
      id:{
        name:"id",
        type:new GraphQLNonNull(GraphQLID)
      },
      _proprietaire:{
        name:"_proprietaire",
        type:GraphQLString
      },
      wilaya:{
        name:'wilaya',
        type:GraphQLString
      },
      commune:{
        name:'email',
        type: GraphQLString
      },
      description: {
        name:'tel',
        type: GraphQLString
      },
      note:{
        name:"note",
        type:GraphQLInt
      },
      vue:{
        name:"vue",
        type:GraphQLInt
      },
      superficie:{
        name:"superficie",
        type:GraphQLInt
      },
      adresse:{
        name:'adresse',
        type: GraphQLString
      },
    },
    resolve: annonce.updateAnnonce
  },
  incrementerVue:{
    type:annonceType,
    args:{
      id:{
        name:"id",
        type:new GraphQLNonNull(GraphQLID)
      },
      vue:{
        name:"vue",
        type: new GraphQLNonNull(GraphQLInt)
      }
    },
    resolve: annonce.incrementerVue
  }
};
