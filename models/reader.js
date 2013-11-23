var mongoose = require('mongoose');

var Reader = mongoose.Schema({
  hero     :String,
  dog      :String,
  child    :String
});

mongoose.model('Reader', Reader);