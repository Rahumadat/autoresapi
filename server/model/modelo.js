 const mongoose = require('../config/mongooseConfig')

const DatasSchema = new mongoose.Schema(
    {
        nombreAutor: { 
            type: String, 
            required: [true, 'autor no puede ser vacio'] ,
            minlength: [3, "debe ser mayor a 3 caracteres"] }
    }, { timestamps: true }
);

const BaseDatos = mongoose.model('authorDb', DatasSchema);

module.exports = BaseDatos;
