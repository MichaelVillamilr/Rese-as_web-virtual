
const mongoose = require('mongoose');

const resenaSchema = new mongoose.Schema({
    nombre: { type:String,required:true },
    email:{ type:String, required: true, unique:true},
    comentario:{type:String,required:true},
    fechaRegistro:{ type: Date, default: Date.now},
});

module.exports = mongoose.model('resena', resenaSchema);