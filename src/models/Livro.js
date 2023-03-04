const mongoose = require('mongoose')

const Livros = mongoose.model('Livros',{

    titulo : {type: String, required: true},
    autor:{type: String, required: true},
    capa:{type: String, required: true},
    categoria:{type: String, required: true}
})

module.exports = Livros