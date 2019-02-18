const express= require ('express');
const cors = require ('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

require('dotenv').config({path: __dirname + '/.env'});

mongoose.connect(process.env.dbConnection,{ useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});

const app = express();

const middlewares = require('./auth/middlewares');
const auth = require('./auth/index');
const characters = require('./api/characters')

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());
app.use(middlewares.checkTokenSetUser);

// Handle production
if(process.env.NODE_ENV === 'production'){
    // Static folder
  app.use(express.static(__dirname + '/public/'));
}

app.get('/userId', (req, res) => {
  res.json({
    user: req.user,
  });
});

app.use('/auth', auth)
app.use('/api/charInfo',middlewares.isLoggedIn, characters)


if(process.env.NODE_ENV === 'production'){
  // Handle SPA
  app.get(/.*/, (req,res)=> res.sendFile(__dirname + '/public/index.html'));
}

function notFound(req, res, next) {
  res.status(404);
  const error = new Error('Not Found - ' + req.originalUrl);
  next(error);
}

function errorHandler(err, req, res, next) {
  res.status(res.statusCode || 500);
  res.json({
    message: err.message,
    stack: err.stack
  });
}

app.use(notFound);
app.use(errorHandler);



const port = process.env.PORT || 8082;
app.listen(port, () =>{
    console.log(`listening on ${port}`);
});