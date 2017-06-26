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


import ProprietaireType from '../utils/proprieatireType'



import typeLogement from '../utils/typeLogementType'




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
      // type: new GraphQLNonNull(ProprietaireType)
      type: ProprietaireType
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
