const routes = require('express').Router()
const Person = require ('../Controllers/PersonController')

routes.get('/person',Person.get)
routes.get('/person/:id',Person.getId)
routes.patch('/person/:id',Person.patch)
routes.post('/person',Person.post)
routes.delete('/person/:id',Person.delete)

module.exports = routes;
