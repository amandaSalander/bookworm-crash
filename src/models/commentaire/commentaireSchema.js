import mongoose from 'mongoose';

import annonce from '../annonces/annonceSchema'


var commentaireSchema = new mongoose.Schema({
  id: { type:String, required:true, unique:true, index:true, default:mongoose.Types.ObjectId },
  _de: {type: mongoose.Schema.Types.ObjectId, ref: 'member'},
  _annonce:{type:mongoose.Schema.Types.ObjectId,ref:"annonce"},
  note: Number,
  description:String
});

let commentaire = mongoose.model('commentaire', commentaireSchema,"commentaire");

module.exports = commentaire;



module.exports.addCommentaire = (root, {_de,_annonce, note, description}) => {
  var newCommentaire = new commentaire({_de:_de,_annonce:_annonce, note:note,description:description});

  return new Promise((resolve, reject) => {
    newCommentaire.save((err, res) => {
      console.log("le vrai res "+res);
      err ? reject(err): resolve(res);
       annonce.findOneAndUpdate(
        { _id:  _annonce },
        { $push:{"_commentaires":{ id: res._id}}},
        {safe: true, upsert: true, new : true}
      )
      // .populate("_de _annonce")
      .exec((err, res)=>{
          err ? reject(err) : resolve(res);
          // console.log(res.annonces[0].id.commune);
          console.log("res _de "+res);
      });
    });
  });
}

