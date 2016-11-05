const mongoose = require('mongoose');
const Schema = mongoose.Schema;

    const Wishes = new Schema({
        token : {type : String },
        wish : {type : String },
        enterDate : { type: Date, default: Date.now }
      });

      Wishes.pre('save', function(next){
            const news = this;
              //Some processs before save
              next();
            });
  


      //Create the model claas
      const WishesClass = mongoose.model('wishes',Wishes);



      //export the model
      module.exports = WishesClass;