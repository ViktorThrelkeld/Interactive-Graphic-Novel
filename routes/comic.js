var mongoose = require('mongoose');
var Reader = mongoose.model('Reader');


exports.index = function(req, res){
  res.render('comic/index', {title: 'comic'});
};
