var mongoose = require('mongoose');

var studSchema = mongoose.Schema({
    name: String,
    city: String,
    pin: String,
    branch: String
})

module.exports = mongoose.model("studs", studSchema);