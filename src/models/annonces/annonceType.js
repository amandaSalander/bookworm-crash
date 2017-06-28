import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID,
  GraphQLUnionType,
  GraphQLScalar,
  GraphQLFloat
 } from 'graphql'


import ProprietaireType from '../utils/proprieatireType'



import typeLogement from '../utils/typeLogementType'





import ObjectId from '../ObjectId/objectIdSchema'
import ObjectIdType from '../ObjectId/objectIdType'

import commentaireType from '../commentaire/commentaireType'
import commentaire from '../commentaire/commentaireSchema'





var CommentaireType=  new GraphQLUnionType({
  name: 'CommentaireType',
  types: [ ObjectIdType, commentaireType ],
  resolveType(value) {
    if (value instanceof ObjectId) {
      return ObjectIdType;
    }
    if (value instanceof commentaire) {
      return commentaireType;
    }
  }
});

var fa= new GraphQLObjectType({
  name:"CA",
  description:"Fa type for nothing just to have a simple thing like [{id}]",
  fields:()=>({
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    id: {
      type: CommentaireType
    }
  })
});

console.log("typeLogement :"+typeLogement)
console.log("ProprietaireType :"+ProprietaireType)

// Defined Annonce type with id, _proprietaire, wilaya, commune, description
export default new GraphQLObjectType({
  name: 'Annonce',
  description: 'Annonce de location ou de vente d"appartement object',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    id: {
      type: GraphQLString
    },
    _proprietaire: {
      type: new GraphQLNonNull(ProprietaireType)
      // type: ProprietaireType
    },
    prix:{
      type:GraphQLInt
    },
    designation:{
      type:GraphQLString
    },
    vue:{
      type: GraphQLInt
    },
    superficie:{
      type: GraphQLInt
    },
    note:{
      type: GraphQLInt
    },
    adresse: {
      type: GraphQLString
    },
    wilaya: {
      type: GraphQLString
    },
    commune: {
      type: GraphQLString
    },
    typeLogement:{
      type:typeLogement
    },
    // Localisation:{
    //   lat:GraphQLString,
    //   long:GraphQLString
    // },
    description: {
      type: GraphQLString
    },
    _commentaires:{
      type:new GraphQLNonNull( new GraphQLList(fa))
    },
    lat:{
        name:"lat",
        type: GraphQLFloat
    },
    log:{
      name:"log",
      type: GraphQLFloat
    }
  })
});
