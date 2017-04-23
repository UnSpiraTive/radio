'use strict';
// ================================Import section
let express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    passport  = require('passport'),
    flash  = require('connect-flash'),
    session = require('express-session'),
    path = require('path'),
    jwt  = require('jsonwebtoken');

require('./config/passport')(passport);

// ================================Custom Importe
let index         = require('./routers/index'),
    admin         = require('./routers/admin'),
    news          = require('./routers/news'),
    login          = require('./routers/login'),
    proposition   = require('./routers/proposition'),
    presenters    = require('./routers/presenters');

// ================================Variable section
let port = process.env.PORT || 8080;

let server = app.listen(port, ()=>{
  console.log('Example app listening on port: ' + port)
});

let io = require('socket.io').listen(server);

//=================================Mongoose configuration
mongoose.connect('mongodb://localhost/radio');
mongoose.connection.once('open', function(){
        console.log('Connection has been made, now make fireworks...');
    }).on('error', function(error){
        console.log('Connection error:', error);
    });

//=================================socketIO
io.on('connection', (socket)=>{
    console.log('socketIO is working..');

//Test IO
socket.on('send-message', (data) => {
    console.log(data.text);
    io.emit('message-received', data);
  });


});



// ===============================BASSIC SERVER SETUP
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({ secret: 'pas123', resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

require('./routers/login.js')(passport);

// ============================Routers for API
app.use('/', [index, admin]);
app.use('/api', [news, presenters, proposition, login]);
app.route('/*').get(function(req, res) {
     res.sendFile(path.join(__dirname + '/public/index.html'));
   });
