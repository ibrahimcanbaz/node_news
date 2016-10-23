//const express = require('express');
//const http = require('http');
const bodyParser = require('body-parser');
const restify = require('restify');
//const app = express();
const router  = require('./router');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const server = restify.createServer();
//DB setup
mongoose.connect('mongodb://localhost:auth/auth');


server.use(morgan('combined'));
server.use(cors());
server.use(bodyParser.json({type : '*/*'}));
server.use(restify.queryParser());
router(server);
const port = process.env.PORT || 5000;

//const server = http.createServer(app);
server.listen(port);
console.log('Server listening on; ', port);
