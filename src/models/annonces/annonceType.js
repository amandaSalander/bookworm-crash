import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
 } from 'graphql'

// Define our user type, with two string fields; `id` and `name`
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
    // proprietaire: {
    //   type: new GraphQLNonNull(GraphQLString)
    // },
    // vue:{
    //   type: GraphQLInt
    // },
    // note:{
    //   type: GraphQLInt
    // },
    // adresse: {
    //   type: GraphQLString
    // },
    wilaya: {
      type: GraphQLString
    },
    commune: {
      type: GraphQLString
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
