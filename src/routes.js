const routes = require('express').Router()
const Person = require ('./Controllers/PersonController')

routes.get('/person',Person.get)
routes.get('/person',Person.getId)
routes.patch('/person',Person.patch)
routes.post('/person',Person.post)
routes.delete('/person',Person.delete)

module.exports = routes;
