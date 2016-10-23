const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Profiles = new Schema({
    username : {type : String },
    password : {type : String },
    email : {type : String },
    nameSurname : { type: String },
    level : {type : String },
    city : {type : String },
    district : {type : String },
    brief : {type : String },
    saveDate : { type: Date, default: Date.now }

  });


  Profiles.pre('save', function(next){
        const profile = this;
          //Some processs before save
          next();
        });
        //Create the model claas
  const ModelClass = mongoose.model('profiles',Profiles);

  module.exports = ModelClass;
