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
  name: 'TypeLogement',
  values: {
    STUDIO: { value: 0 },
    F2: { value: 1 },
    F3: { value: 2 },
    VILLA:{ value:3}
  }
});