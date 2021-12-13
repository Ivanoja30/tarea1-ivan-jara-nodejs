const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email:String,
    direccion: [{
        type: Schema.Types.ObjectId
    }]
});

module.exports = mongoose.model('user', userSchema);
