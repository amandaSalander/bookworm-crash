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




import ObjectId from '../ObjectId/objectIdSchema'



export default new GraphQLObjectType({
  name:"ObjectIdType",
  description:"ObjectId type",
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    id: {
      type: GraphQLString
    }
  })
});