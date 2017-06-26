import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
} from 'graphql';

import memberType from './memberType';
import member from './memberSchema';


export default{
	addMember:{
    type:memberType,
    args: {
      firstname:{
        name:'firstname',
        type:new GraphQLNonNull(GraphQLString)
      },
      lastname:{
        name:'firstname',
        type:new GraphQLNonNull(GraphQLString)
      },
      email:{
        name:'email',
        type: new GraphQLNonNull(GraphQLString)
      },
      tel: {
        name:'tel',
        type: new GraphQLNonNull(GraphQLString)
      },
      password: {
        name:'password',
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    resolve: member.addMember
  	},
	addAnnonce:{
		type:memberType,
		args:{
			_id:{
				name:"_id",
				type:new GraphQLNonNull(GraphQLString)
			},
			id:{
				name:"id",
				type:new GraphQLNonNull(GraphQLString)
			}
		},
		resolve:member.addAnnonce
	}
}