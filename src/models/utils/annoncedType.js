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
import Annonce from '../annonces/annonceSchema' 

import memberType from '../member/memberType'
import member from '../member/memberSchema'

import userType from '../user/userType'
import user from '../user/userSchema'


import ObjectId from '../ObjectId/objectIdSchema'
import ObjectIdType from '../ObjectId/objectIdType'


export default new GraphQLUnionType({
  name: 'Annonced',
  types: [ ObjectIdType ],
  resolveType(value) {
    if (value instanceof ObjectId) {
      return ObjectIdType;
    }
    if (value instanceof user) {
      return userType;
    }
  }
});