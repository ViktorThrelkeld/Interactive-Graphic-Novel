var mongoose = require('mongoose');
var Reader = mongoose.model('Reader');


// exports.index = function(req, res){
//   Reader.find(function(err, readers){
//   res.render('comic/index', {title: 'Comic', readers: readers});
//   });
// };

exports.show = function(req, res){
  Reader.findById(req.params.id, function(err, reader){
    res.render('comic/show', {title: 'Comic', reader: reader});
  });
};
