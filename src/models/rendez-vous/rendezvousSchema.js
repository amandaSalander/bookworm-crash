import mongoose from 'mongoose';


import member from '../member/memberSchema';

var rendezvousSchema = new mongoose.Schema({
  id: { type:String, required:true, unique:true, index:true, default:mongoose.Types.ObjectId },
  _de: { type: mongoose.Schema.Types.ObjectId, ref: 'member' },
  _avec: { type: mongoose.Schema.Types.ObjectId, ref: 'member' },
  _annonce: { type: mongoose.Schema.Types.ObjectId, ref: 'annonce' },
  date:{
  	type:mongoose.Schema.Types.Date,
  	required:true
  },
  description: String,
  etat:String,
  typeRDV:String
});

let rendezvous = mongoose.model('rendezvous', rendezvousSchema);

module.exports = rendezvous;

module.exports.getListOfRDVs = (root,{avecEtat}) => {
  return new Promise((resolve, reject) => {
    console.log("avecEtat "+avecEtat)

    console.log("")
    var etatLocal="";

    if (avecEtat===0){
      etatLocal="EN_ATTENTE";
    }
    else if (avecEtat===1){
      etatLocal="ANNULE";
    }
    else if (avecEtat===2){
      etatLocal="ACCEPTE";
    }
    else{
      etatLocal="";
    }

    rendezvous.find({etat:{
                            $regex: etatLocal, $options: 'i'
                          }})
    // .exec((err, res) => {
    //   err ? reject(err) : resolve(res);
    // });
    // .populate("_de _avec")
    .populate("_de _avec _annonce")
    .exec((err, res) => {
      err ? reject(err) : resolve(res);
      console.log("rdvs: "+res);
    });
  });
};

// module.exports.getRDVById = (root, {id}) => {
//   return new Promise((resolve, reject) => {
//     rendezvous.findOne({
//         id: id
//     }).exec((err, res) => {
//       err ? reject(err) : resolve(res);
//     });
//   });
// };

// module.exports.getRDVsByDe = (root, {id}) => {
//   return new Promise((resolve, reject) => {
//     rendezvous.find({
//         _de: id
//     }).exec((err, res) => {
//       err ? reject(err) : resolve(res);
//     });
//   });
// };

// module.exports.getRDVsByAvec = (root, {id}) => {
//   return new Promise((resolve, reject) => {
//     rendezvous.find({
//         _avec: id
//     }).exec((err, res) => {
//       err ? reject(err) : resolve(res);
//     });
//   });
// };




module.exports.addRDV = (root, {_de, _avec,_annonce,date, description, typeRDV}) => {
  var typeR=""; 

      if(typeRDV==0){
         typeR="RECIEVED";
      }
      else {
        typeR="DEMANDED"; 
      }

  var newRDV = new rendezvous({_de:_de,
  	_avec:_avec,
  	_annonce:_annonce,
  	date:date,
  	description:description,
    etat:"EN_ATTENTE",
    typeRDV:typeR
  });

  return new Promise((resolve, reject) => {
    newRDV.save((err, res) => {
      err ? reject(err): resolve(res);

      member.findOneAndUpdate(
        { _id:  _de },
        { $push:{"_rdvs":{ id: res._id}}},
        {safe: true, upsert: true, new : true}
      ).
      exec((err, res)=>{
          err ? reject(err) : resolve(res);
          // console.log(res.annonces[0].id.commune);
      });

      member.findOneAndUpdate(
        { _id:  _avec },
        { $push:{"_rdvs":{ id: res._id}}},
        {safe: true, upsert: true, new : true}
      ).
      exec((err, res)=>{
          err ? reject(err) : resolve(res);
          // console.log(res.annonces[0].id.commune);
      });
    });
  });
}

// module.exports.updateRDV = (root, {id,de, avec,annonce, date,etat, description}) => {
module.exports.updateRDV = (root, {id,_de, _avec,_annonce, date,etat, description}) => {

  var etatLocal="";

    if (etat===0){
      etatLocal="EN_ATTENTE";
    }
    else if (etat===1){
      etatLocal="ANNULE";
    }
    else if (etat===2){
      etatLocal="ACCEPTE";
    }
    else{
      etatLocal=undefined;
    }


  var newRDV = {/*_de:_de,_avec:_avec,_annonce:_annonce,date:date,description:description,*/etat:etatLocal};

  return new Promise((resolve, reject) => {
    rendezvous.findOneAndUpdate(
        { id: id },
        { $set: newRDV },
        { returnNewDocument: true }
    ).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
}
