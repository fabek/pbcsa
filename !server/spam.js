var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io').listen(http);
var mongojs = require('mongojs');
var db = mongojs('baza', ['baza']);

var schedule = require('node-schedule');

var wishes = 'Wszystkiego najlepszego!! :)';

var job1 = schedule.scheduleJob('*/2 * * * *', function(){
    console.log('Co 2 minuty');
    db.baza.update({ imie: /a$/ }, {$addToSet: { wiadomosci: wishes } }, {multi: true}, function (err, doc) {
       io.sockets.emit('REFRESH');
    });
});

var job2 = schedule.scheduleJob('0 7 * * * *', function(){
    console.log('Codziennie o 7:00');
    var d = new Date();
    if(d.getUTCMonth()+1 == 3 && d.getUTCDay() == 8){
      db.baza.update({ imie: /a$/ }, {$addToSet: { wiadomosci: wishes } }, {multi: true}, function (err, doc) {
         io.sockets.emit('REFRESH');
      });
    }
});

console.log('CRON STARTED');
