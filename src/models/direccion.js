const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const direccionSchema = new Schema ({
    NombreCalle: String,
    Esquina: String,
    NumeroCalle: Number,
    arrendatario: {
        type: Schema.ObjectId,
        ref: 'user'
    }
});

module.exports = mongoose.model('direccion', direccionSchema);