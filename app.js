const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const fs = require("fs");
const express = require("express");

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use(cookieParser());

app.use('/static',express.static('public'));

app.set('view engine', 'ejs');

const routes = require('./routes');
const cards = require('./routes');

app.use(cards);
app.use(routes);

app.use((req,res,next)=>{
  const err = new Error('Not found');
  err.status = 404;
  next(err);
});

app.use((err,req,res,next)=>{
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
});


app.listen(3000,()=>console.log("Loud and clear on http://localhost:3000. Stay golden pony-boy."));
