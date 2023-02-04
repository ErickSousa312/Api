const mongoose = require('mongoose')

//Cria modelo de person
const Person = mongoose.model('person',{
    nome:String,
    idade:Number,
    salario:Number,
})

module.exports=Person