import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID,
  GraphQLDate
  } from 'graphql';

import rendezvousType from './rendezvousType';
import rendezvous from './rendezvousSchema';

import typeRDVType from '../utils/typeRDVType'

import etatRDV from '../utils/etatRDVType'

export default {
  addRendezVous:{
    type:rendezvousType,
    args: {
      // id:{
      //   name:"id",
      //   type:new GraphQLNonNull(GraphQLID)
      // },
      _de:{
        name:'_de',
        type:new GraphQLNonNull(GraphQLString)
      },
      _avec:{
        name:'_avec',
        type: new GraphQLNonNull(GraphQLString)
      },
      _annonce: {
        name:'_annonce',
        type: new GraphQLNonNull(GraphQLString)
      },
      date:{
      	name:'date',
      	type: GraphQLString
      },
      description:{
	  	  name:'_description',
	  	  type:GraphQLString
	    },
      typeRDV:{
        type:typeRDVType
      }

    },
    resolve: rendezvous.addRDV
  },
  updateRDV:{
    type:rendezvousType,
    args: {
      id:{
        name:"id",
        type:new GraphQLNonNull(GraphQLID)
      },
      _de:{
        name:'_de',
        type:GraphQLString
      },
      _avec:{
        name:'_avec',
        type: GraphQLString
      },
      _annonce: {
        name:'_annonce',
        type: GraphQLString
      },
      date:{
        name:'date',
        type: GraphQLString
      },
      description:{
        name:'_description',
        type:GraphQLString,
      },
      etat:{
        name:"etat",
        type:etatRDV
      }
    },
    resolve: rendezvous.updateRDV
  }

}