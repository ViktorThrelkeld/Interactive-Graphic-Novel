var mongoose = require('mongoose');
var Reader = mongoose.model('Reader');


exports.index = function(req, res){
  Reader.find(function(err, readers){
  res.render('comic/index', {title: 'Comic', readers: readers});
  });
};
