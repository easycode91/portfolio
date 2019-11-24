const { Schema,model } = require('mongoose');


const projects = Schema({
    nombre : String,
    descripcion : String,
    categoria : String,
    lenguajes : String,
    anio : Number,
    imagen : String
});

module.exports = model('Project',projects);