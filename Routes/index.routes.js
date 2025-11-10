
const express = require('express');
const router = express.Router();
const autoresRouter = require('./autores.router');
const librosRouter = require('./libros.router');

function apiRoutes(app){
    app.use('/v1/api', router)
    router.use('/autores', autoresRouter)
    router.use('/libros', librosRouter)
}



module.exports = apiRoutes


