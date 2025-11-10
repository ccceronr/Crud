//Importo Joi para validación de esquemas
const Joi = require('joi');

//Definición de los esquemas de validación para autores
   const id = Joi.number().integer();
   const nombre = Joi.string();
   const nacionalidad = Joi.string();
   const fechaNacimiento = Joi.date();


   const getAutorSchema = Joi.object({
    id: id.required(),
});

const createAutorSchema = Joi.object({
    id: id.required(),
    nombre: nombre.required(),
    nacionalidad: nacionalidad,
    fechaNacimiento: fechaNacimiento,
});

const updateAutorSchema = Joi.object({
    nombre: nombre,
    nacionalidad: nacionalidad,
    fechaNacimiento: fechaNacimiento,
});

module.exports = { getAutorSchema, createAutorSchema, updateAutorSchema };
