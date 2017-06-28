import mongoose from 'mongoose';



var memberSchema = new mongoose.Schema({
  id:         { type:String, required:true, unique:true, index:true, default:mongoose.Types.ObjectId },
  firstname:  String,
  lastname:   String,
  email:      String,
  tel:        String,
  password:   {
                type:String,
                select: false
              }, 
  _annonces:   [
                {
                  id:{ type: mongoose.Schema.Types.ObjectId, ref: 'annonce' }
                }
              ],
  _rdvs:  [
                {
                  id:{ type: mongoose.Schema.Types.ObjectId, ref: 'rendezvous' }
                }
          ]            
}, {collection:"member"});

let member = mongoose.model('member', memberSchema, "member");
// module.exports.member = mongoose.model('member', memberSchema);


module.exports = member;
module.exports = mongoose.model('member', memberSchema);



module.exports.getListOfMembers = () => {
  return new Promise((resolve, reject) => {
    member.find({})
    // .exec((err, res) => {
    //   err ? reject(err) : resolve(res);
    // });
    .populate("_annonces.id _rdvs.id")
    .exec((err,res)=>{
      err ? reject(err) : resolve(res);
      console.log("res "+res)
    })
  });
};


module.exports.getMemberById = (root, {id}) => {
  return new Promise((resolve, reject) => {
    member.findOne({
        id: id
    })
    // .exec((err, res) => {
    //   err ? reject(err) : resolve(res);
    // });
    .populate("_annonces.id _rdvs.id")
    .exec((err,res)=>{
      err ? reject(err) : resolve(res);
      console.log("res "+res)
    })
  });
};


module.exports.getMemberByEmail = (root, {email}) => {
  return new Promise((resolve, reject) => {
    member.findOne({
        email: email
    })
    // .exec((err, res) => {
    //   err ? reject(err) : resolve(res);
    // });
    .populate("_annonces.id _rdvs.id")
    .exec((err,res)=>{
      err ? reject(err) : resolve(res);
      console.log("res "+res)
    })
  });
};


module.exports.addMember = (root, {firstname, lastname, email, tel, password}) => {
  var newMember = new member({
                              firstname:  firstname, 
                              lastname:   lastname,
                              email:      email,
                              tel:        tel,
                              password:   password,
                              _annonces:   [],
                              _rdvs:    []
                          });

  return new Promise((resolve, reject) => {
    newMember.save((err, res) => {
      err ? reject(err): resolve(res);
    });
  });
}


module.exports.updateMember = (root, {id, firstname, lastname, email, tel, password, annonces}) => {
  var updateMember = {firstname:firstname, lastname:lastname, email:email, tel:tel, password:password};
  return new Promise((resolve, reject) => {
    member.findOneAndUpdate(
        { id: id },
        { $set: updateMember },
        { returnNewDocument: true }
    ).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
}


module.exports.addAnnonce= (root, {_id, id})=>{
  return new Promise((resolve, reject)=>{
    member.findOneAndUpdate(
        { id:   _id },
        { $push:{"annonces":{ id: id}}},
        {safe: true, upsert: true, new : true}
    ).
    exec((err, res)=>{
        err ? reject(err) : resolve(res);
        // console.log(res.annonces[0].id.commune);
    });

    // member.findOne({id:_id}).
    // populate("annonces[0]._id").
    // exec((err,res)=>{
    //   console.log(res.annonces[0]._id.wilaya);
    // })
  });
}

