const bodyParser = require('body-parser');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');

const server = express();

const userRoutes = require('./routes/users');

mongoose.connect('mongodb://localhost/rest-api-tarea').then(db => console.log('db esta conectado'))
.catch(err => console.log(err));

// settings
server.set('port', process.env.PORT || 3000);

// middleware
server.use(morgan('dev'));
server.use(bodyParser.json());

// routes
server.use('/users', userRoutes);

// start the server
server.listen(server.get('port'),() => {
    console.log('server on port', server.get('port'));
});