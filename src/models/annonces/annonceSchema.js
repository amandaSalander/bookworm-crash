import mongoose from 'mongoose';

import member from '../member/memberSchema'

var annonceSchema= new mongoose.Schema({

	  id: { type:String, required:true, unique:true, index:true, default:mongoose.Types.ObjectId },
  	vue:{
      type:Number
    },
  	note:Number,
  	adresse:String,
    superficie:Number,
  	wilaya:String,
  	commune:String,
    typeLogement:String,
    //   type:mongoose.Schema.Types.ObjectId, ref: 'typeLogement'
    // },
  	// Localisation:{
  		// lat:Number,
  		// lon:Number
  	// },
  	description:String,
    _proprietaire:{ type: mongoose.Schema.Types.ObjectId, ref: 'member', required:true },


});


let annonce = mongoose.model('annonce', annonceSchema,"annonce");


module.exports=annonce;


module.exports.getListOfAnnonces = () => {
  return new Promise((resolve, reject) => {
    annonce.find({})
    // .exec((err, res) => {
    //   err ? reject(err) : resolve(res);
    // });
    .populate("_proprietaire").
    exec(function (err, annonce) {
      if (err) return handleError(err);
      console.log('annonce here %s', annonce);
      err ? reject(err) : resolve(annonce);
    })
  });
};


module.exports.getAnnonceById = (root, {id}) => {

    

  return new Promise((resolve, reject) => {
    annonce.findOne({
        id: id
    // })
    })
    // .exec((err, annonce) => {
    //   err ? reject(err) : resolve(annonce);
    //   console.log('annonce here %s', annonce);
    // });
    .populate("_proprietaire").
    exec(function (err, annonce) {
      if (err) return handleError(err);
      console.log('annonce here %s', annonce);
      err ? reject(err) : resolve(annonce);
    })

    
  });


};


module.exports.getAnnoncesByWilaya = (root, {wilaya, typeLogement}) => {
  return new Promise((resolve, reject) => {
    annonce.find({
      wilaya: wilaya
    }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};





module.exports.addAnnonce = (root, {_proprietaire, wilaya, commune ,description, vue, adresse, note,superficie,typeLogement}) => {
  var newAnnonce = new annonce({
      _proprietaire:_proprietaire, 
      wilaya:wilaya,
      commune:commune, 
      description:description,
      vue:vue,
      adresse:adresse,
      superficie:superficie,
      note:note,
      typeLogement:typeLogement
    });

  return new Promise((resolve, reject) => {
    newAnnonce.save((err, res) => {
      err ? reject(err): resolve(res);
      member.findOneAndUpdate(
        { id:  _proprietaire },
        { $push:{"_annonces":{ id: res._id}}},
        {safe: true, upsert: true, new : true}
      ).
      exec((err, res)=>{
          err ? reject(err) : resolve(res);
          // console.log(res.annonces[0].id.commune);
      });

    });
  });
}


// TODO : update the query this query does only increment vue by one
module.exports.updateAnnonce = (root, {id, _proprietaire, wilaya,commune, description, note,superficie,adresse}) => {
  var updateAnnonce = {
                        wilaya:wilaya, 
                        _proprietaire:_proprietaire, 
                        description:description, 
                        note:note,
                        commune:commune,
                        superficie:superficie,
                        adresse:adresse
                      };
  return new Promise((resolve, reject) => {
    annonce.findOneAndUpdate(
        { id: id },
        // { $set: updateAnnonce },
        {$inc:{vue:1}},
        { returnNewDocument: true }
    ).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
}

