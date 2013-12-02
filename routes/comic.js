var mongoose = require('mongoose');
var Reader = mongoose.model('Reader');


exports.show = function(req, res){
  Reader.findById(req.params.id, function(err, reader){
    res.render('comic/show', {title: 'Comic', reader: reader});
  });
};
