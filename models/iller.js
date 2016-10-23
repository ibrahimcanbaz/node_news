const mongoose = require('mongoose');
const IllerSchema = mongoose.Schema;

    const Iller = new IllerSchema({
        plaka : {type : Number },
        il : {type : String },
        ilce : { type: String }
      });





      //Create the model claas
      const IllerClass = mongoose.model('iller',Iller);



      //export the model
      module.exports = IllerClass;
