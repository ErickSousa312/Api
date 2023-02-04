//define parâmetros para conectar no banco de dados
require('dotenv').config()
const mongoose = require('mongoose')
const app = require('../app')

mongoose.set("strictQuery", true)

const user = process.env.BD_User
const password = process.env.BD_Password
const url = `mongodb+srv://${user}:${password}@clusterick.g3gnoap.mongodb.net/bancoapi?retryWrites=true&w=majority`

async function startDB(){
    mongoose.set("strictQuery", true)
    await mongoose.connect(
        url
    )
    .then(
        console.log('Conectado ao MongoBD!'),
        app.listen(3000)
    )
    .catch(
        error=>console.log(err)
    )
}

module.exports = startDB;
