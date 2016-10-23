const mongoose = require('mongoose');
const Schema = mongoose.Schema;

    const News = new Schema({
        newsTitle : {type : String },
        newsContent : {type : String },
        enterDate : { type: Date, default: Date.now }
      });

      News.pre('save', function(next){
            const news = this;
              //Some processs before save
              next();
            });
  


      //Create the model claas
          const ModelClass = mongoose.model('news',News);



      //export the model
      module.exports = ModelClass;
