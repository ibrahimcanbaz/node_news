const Iller = require('../models/iller');
const News = require('../models/news');
const AppUser = require('../models/appUsers');
const Profiles = require('../models/profiles');

//#############################################################
// Put News
//
//############################################################

exports.putNews = function(req,res,err){
  console.log(req.body);
  const newsTitle =req.body.newsTitle;
  const newsContent = req.body.newsContent;

  const news = new News({
    newsTitle : newsTitle,
    newsContent : newsContent
  });

  news.save(function(err){
    if(err){return next(err)};
    console.log('Saved successfully');
    res.send({message : "Saved wit zero error.."});
  })
}
//#############################################################
// Put App User
//
//############################################################

exports.putAppUser = function(req,res,err){
  //console.log(req.body);
  const token =req.body.token;
  const locale = req.body.locale;
  const version = req.body.version;
  const enterDate = req.body.enterDate;

  const appUser = new AppUser({
    token : token,
    locale : locale,
    version : version,
    enterDate : enterDate,

  });
 
    AppUser.find({ 'token': token }, function (err, doc) {
    console.log(doc.length)
    
    if (typeof doc != 'undefined' && doc.length != 0){
    AppUser.findOneAndUpdate({token:token}, req.body, function (err, place) {
      res.send(place);
    });
  } else {
    appUser.save(function(err){
    if(err){return next(err)};
      res.send({message : "Saved wit zero error.."});
  })
  }
  });
  
  
}

//#############################################################
// Get previosly putted newsTitle
//
//############################################################

exports.getNews = function(req,res,err){

console.log('helloo');


  News.find({},function(err,news){
    if(err){return next(err)};

    res.send(news);
  })
}

//#############################################################
// Get saved cities
//
//############################################################


exports.getIller = function(req,res,err){

console.log('helloo22');




  Iller.aggregate(

        // Grouping pipeline
        [{ "$group": {
            "_id": '$il',
            "plaka": { "$max": '$plaka' }
        }},
        {"$sort": {'_id': 1}}]

    ,
    function(err,iller) {
      if(err){return next(err)};
       res.send(iller);
    }
);
}

//#############################################################
// get ilceler
//
//############################################################

exports.getIlceler = function(req,res,err){

const ilid = req.query.il;


  Iller.find({"plaka" : ilid},function(err,news){
    if(err){return next(err)};

    res.send(news);
  }).sort({ilce : -1});



}

//#############################################################
// Insert the profile to the DB
//
//############################################################


exports.putProfile = function(req,res,err){


  const username =req.body.username;
  const password =req.body.password;
  const email =req.body.email;
  const nameSurname =req.body.nameSurname;
  const level =req.body.level;
  const city =req.body.city;
  const district =req.body.district;
  const brief =req.body.brief;


  const profiles = new Profiles({
    username  : username,
    password  : password,
    email  : email,
    nameSurname  : nameSurname,
    level  : level,
    city  : city,
    district  : district,
    brief  : brief
  });

  profiles.save(function(err){
    if(err){return next(err)};
    console.log('Saved successfully');
    res.send({message : "Saved wit zero error.."});
  })
}
