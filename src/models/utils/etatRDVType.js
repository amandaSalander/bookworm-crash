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
  name: 'Etat',
  values: {
    EN_ATTENTE: { value: 0 },
    ANNULE: { value: 1 },
    ACCEPTE: { value: 2 }
  }
});