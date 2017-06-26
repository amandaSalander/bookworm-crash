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
 } from 'graphql'

import memberType from '../member/memberType'
import member from '../member/memberSchema'


import ObjectId from '../ObjectId/objectIdSchema'
import ObjectIdType from '../ObjectId/objectIdType'





export default new GraphQLUnionType({
  name: 'ProprietaireType',
  types: [ ObjectIdType, memberType ],
  resolveType(value) {
    if (value instanceof ObjectId) {
      return ObjectIdType;
    }
    if (value instanceof member) {
      return memberType;
    }
  }
});