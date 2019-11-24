const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
//Initialization
const app = express();
//Setting
app.set('port',process.env.PORT || 3000);

//Middleware
app.use(express.urlencoded({ extended : false }));
app.use(express.json())
app.use(morgan('dev'));

//CORS
app.use(cors());

//router
app.use('/api',require('./routes/project'));


//export 
module.exports = app;

