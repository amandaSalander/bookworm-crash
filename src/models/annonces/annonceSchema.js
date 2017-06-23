import mongoose from 'mongoose';

var annonceSchema= new mongoose.Schema({

	  id: { type:String, required:true, unique:true, index:true, default:mongoose.Types.ObjectId },
  	// proprietaire:mongoose.Types.ObjectId,
  	// vue:Number,
  	// note:Number,
  	// adresse:String,
  	wilaya:String,
  	commune:String,
  	// Localisation:{
  		// lat:Number,
  		// lon:Number
  	// },
  	description:String


});


let annonce = mongoose.model('annonce', annonceSchema);


module.exports=annonce;


module.exports.getListOfAnnonces = () => {
  return new Promise((resolve, reject) => {
    annonce.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};


module.exports.getAnnonceById = (root, {id}) => {
  return new Promise((resolve, reject) => {
    annonce.findOne({
        id: id
    }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};


module.exports.getAnnoncesByWilaya = (root, {wilaya}) => {
  return new Promise((resolve, reject) => {
    annonce.find({
      wilaya: wilaya
    }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.addAnnonce = (root, {wilaya, description}) => {
  var newAnnonce = new annonce({wilaya:wilaya, description:description});

  return new Promise((resolve, reject) => {
    newAnnonce.save((err, res) => {
      err ? reject(err): resolve(res);
    });
  });
}

module.exports.updateAnnonce = (root, {id, wilaya, description}) => {
  var updateAnnonce = {wilaya:wilaya, description:description};
  return new Promise((resolve, reject) => {
    user.findOneAndUpdate(
        { id: id },
        { $set: updateAnnonce },
        { returnNewDocument: true }
    ).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
}

