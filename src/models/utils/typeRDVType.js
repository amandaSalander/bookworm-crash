import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID,
  GraphQLEnumType
  } from 'graphql';

export default new GraphQLEnumType({
  name: 'TypeRDV',
  values: {
    RECIEVED: { value: 0 },
    DEMANDED: { value: 1 }
  }
});