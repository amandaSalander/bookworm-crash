import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
  } from 'graphql';

import memberType from './memberType'
import member from './memberSchema'

export default {
  members: {
    type: new GraphQLList(memberType),
    resolve: member.getListOfMembers
  },
  memberId: {
    type: memberType,
    args: {
      id: {
        type: GraphQLID
      }
    },
    resolve: member.getMemberById
  },
  memberEmail: {
    type: memberType,
    args: {
      email: {
        type: GraphQLString
      }
    },
    resolve: member.getMemberByEmail
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
