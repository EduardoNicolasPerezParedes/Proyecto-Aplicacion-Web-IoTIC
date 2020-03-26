const express = require('express');
const loan_controller = require('./loan.controller');

const loan_router = express.Router();

/**
 * ruta que permite listar todos los prestamos.
 */
loan_router.get('/', loan_controller.list);

/**
 * ruta que permite obtener un prestamo.
 */
loan_router.get('/:id', loan_controller.get);

/**
 * ruta que permite actualizar un prestamo.
 */
loan_router.put('/:id', loan_controller.update);

/**
 * ruta que permite actualizar un prestamo.
 */
loan_router.put('/finished/:id', loan_controller.updateState);

/**
 * ruta que permite eliminar un prestamo.
 */
loan_router.delete('/:id', loan_controller.delete);

/**
 * ruta que permite el registro un nuevo prestamo.
 */
loan_router.post('/', loan_controller.create);

module.exports = loan_router;
