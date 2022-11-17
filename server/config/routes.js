module.exports = function (app) {

    const express = require('express');
//************************************** */
    //devolver JSON de nuestra api
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());

    const controller = require('../controller/controller')
    
//**aqui estan las rutas para cada metodo que se invoca en el controller */

    app.get('/buscarTodos', function (req, res) {
        controller.buscarTodos(req,res);
    });

    app.post('/nuevo', function (req, res) {
        controller.nuevo(req,res);
    });

    app.get('/buscarUno/:id', function (req, res) {
        controller.buscarUno(req,res);
    });

    app.put('/actualizar/:id', function (req, res) {
        controller.actualizar(req,res);
    });

    app.delete('/borrar/:id', function (req, res) {
        controller.borrar(req,res);
    });

}


