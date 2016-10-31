const mongoose = require('mongoose');
const Schema = mongoose.Schema;

    const AppUsers = new Schema({
        token : {type : String },
        locale : {type : String },
        version : {type : String },
        enterDate : { type: Date, default: Date.now }
      });

      AppUsers.pre('save', function(next){
            const news = this;
              //Some processs before save
              next();
            });
  


      //Create the model claas
      const AppUserClass = mongoose.model('appsuers',AppUsers);



      //export the model
      module.exports = AppUserClass;