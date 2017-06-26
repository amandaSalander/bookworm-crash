import mongoose from 'mongoose'

var ObjectIdSchema = new mongoose.Schema({
  id:         { type:String, required:true, unique:true, index:true, default:mongoose.Types.ObjectId },
}, {collection:"ObjectId"});

let ObjectId = mongoose.model('ObjectId', ObjectIdSchema, "ObjectId");

module.exports= ObjectId;