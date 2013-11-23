var mongoose = require('mongoose');
var Reader = mongoose.model('Reader');


exports.index = function(req, res){
  res.render('home/index', {title: 'Home'});
};

exports.create = function(req, res){
  new Reader(req.body).save(function(err, reader, count){
    res.redirect('/comic');
  });
};