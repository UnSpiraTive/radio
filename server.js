'use strict';
// ================================Import section
let express = require('express'),
    app = express(),
    passport  = require('passport'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    path = require('path'),
    cors = require('cors'),
    jwt  = require('jsonwebtoken');



// ================================Custom Importe
let index         = require('./routers/index'),
    news          = require('./routers/news'),
    login          = require('./routers/login'),
    proposition   = require('./routers/proposition'),
    presenters    = require('./routers/presenters');

    // users = require('./routers/admin.js');

// ================================Variable section
let port = process.env.PORT || 8080;

let server = app.listen(port, ()=>{
  console.log('Example app listening on port: ' + port)
});

const admin         = require('./routers/admin');
let io = require('socket.io').listen(server);

//=================================Mongoose configuration
mongoose.connect('mongodb://localhost/radio');
mongoose.connection.once('open', function(){
        console.log('Connection has been made, now make fireworks...');
    }).on('error', function(error){
        console.log('Connection error:', error);
    });

//=================================socketIO
let chat = require('./routers/models/chat');


io.on('connection', (socket)=>{
    console.log('socketIO is working..');

socket.on('getMSG', (zm)=>{
  chat.find((er, dane)=>{
    if (er) throw er;
<<<<<<< HEAD
    io.emit('update-chat-view', dane);
=======
    io.emit('message-received', dane);
>>>>>>> refs/remotes/origin/master
  });
});

//Remove msg
socket.on('remove-msg', (id)=>{
  chat.remove({_id: id}, (er)=>{
    if(er) throw er;

    chat.find((er, result)=>{
      if (er) throw er;
      io.emit('update-chat-view', result);
    });
  });
});

//Add msg
socket.on('send-message', (data) => {
<<<<<<< HEAD
    let dane = new chat(data);
=======
    let dane = new chat(data[0]);
>>>>>>> refs/remotes/origin/master
    dane.save((er, res)=>{
    if (er) throw er;
      chat.find((er, result)=>{
        if (er) throw er;
        io.emit('update-chat-view', result);
      });
    });

  });
});


// ===============================BASSIC SERVER SETUP
app.use(cors());
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Passport
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);


// ============================Routers for API
app.use('/', [index, admin]);
app.use('/api', [news, presenters, proposition, login]);
app.route('/*').get(function(req, res) {
     res.sendFile(path.join(__dirname + '/public/index.html'));
   });
