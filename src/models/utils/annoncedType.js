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

import mongoose from 'mongoose'

import annonceType from '../annonces/annonceType' 
import annonce from '../annonces/annonceSchema' 

import memberType from '../member/memberType'
import member from '../member/memberSchema'

import userType from '../user/userType'
import user from '../user/userSchema'

import ProprietaireType from './proprieatireType'
import typeLogement from './typeLogementType'

import ObjectId from '../ObjectId/objectIdSchema'
import ObjectIdType from '../ObjectId/objectIdType'


// buggy buggy very buggy -_-, I had to redefine the type Annonce here because s*@# imprt did not work 

var a=new GraphQLObjectType({
  name: 'Annonces',
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
    }
  })
});

console.log("memberType "+memberType)
console.log("annonceType "+annonceType)
console.log("annonceType "+userType)
console.log("ObjectIdType "+ObjectIdType)
// console.log("ObjectIdType "+a.fields)
// console.log("annonceType "+user)

export default new GraphQLUnionType({
  name: 'Annonced',
  types: [ ObjectIdType,a ],
  resolveType(value) {
    if (value instanceof ObjectId) {
      return ObjectIdType;
    }
    if (value instanceof annonce) {
      return a;
    }
    // if (value instanceof user) {
    //   return userType;
    // }
  }
});