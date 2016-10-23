const NewsService = require('./controllers/newsController');

module.exports = function(app){

  app.get('/', function(req,res,next){
      res.send(['water','phone','paper']);
    });

app.post('/putNews', NewsService.putNews);
app.get('/getNews', NewsService.getNews);
app.get('/getIller', NewsService.getIller);
app.post('/putAppUser', NewsService.putAppUser);
//app.post('/putIl', NewsService.putIl);
app.get('/getIlceler', NewsService.getIlceler);

}
