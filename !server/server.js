var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io').listen(http);
var mongojs = require('mongojs');
var db = mongojs('baza', ['baza']);
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// wlaczenie CORS
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


app.get('/data', function (req, res) {
    db.baza.find(function (err, doc) {
        console.log('HTTP: GET all');
        res.json(doc);
    });
});

app.get('/data/:id', function (req, res) {
  var id = req.params.id;
  console.log('HTTP: GET ' + id);
  db.baza.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.post('/data', function (req, res) {
  console.log('HTTP: POST');
  console.log(req.body);
  db.baza.update({}, {$addToSet: { wiadomosci: req.body.message } }, {multi: true}, function (err, doc) {
      res.json(doc);
      io.sockets.emit('REFRESH');
  });
});


app.delete('/data/:id', function (req, res) {
  var id = req.params.id;
  console.log('HTTP: DELETE ' + id);
  db.baza.update({ _id: mongojs.ObjectId(id) }, { $pop: { wiadomosci: 1 } }, function (err, doc) {
    res.json(doc);
    io.sockets.emit('REFRESH');
  });
});

http.listen(3000);
console.log('Server running at 3000');

/*
io.sockets.on('connection', function (socket) {

  socket.on('NEWMESSAGE', function (data) {
    console.log('SOCKET: NEWMESSAGE');
    console.log(data);
    io.sockets.emit('REFRESH');
  });

});
*/
