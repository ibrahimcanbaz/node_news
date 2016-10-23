const mongoose = require('mongoose');
const Schema = mongoose.Schema;

    const AppUsers = new Schema({
        token : {type : String },
        locale : {type : String },
        enterDate : { type: Date, default: Date.now }
      });

      AppUsers.pre('save', function(next){
            const news = this;
              //Some processs before save
              next();
            });
  


      //Create the model claas
          const ModelClass = mongoose.model('appsuers',AppUsers);



      //export the model
      module.exports = ModelClass;