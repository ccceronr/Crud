const express = require('express'); // Importa el módulo Express
const router = express.Router(); // Crea un enrutador de Express
const validatorHandler = require('../Middlewares/validator.handler'); // Importa el middleware de validación{
const { getAutorSchema, createAutorSchema, updateAutorSchema } = require('../Schemas/autores.schema'); // Importa los esquemas de validación para autores

//ENDPOINT PARA AUTORES

// Define una ruta GET para '/api/autores' 
router.get('/', (req, res) => {
    res.send([
        { id: 1, 
                nombre: "Gabriel García Marquez", 
                Nacionalidad: "Colombiana", 
                fechaNacimiento: "1927-03-06" },

            { id: 2, 
                nombre: "Isabel Allende", 
                Nacionalidad: "Chilena", 
                fechaNacimiento: "1942-08-02" },

            { id: 3, 
                nombre: "Mario Vargas Llosa", 
                Nacionalidad: "Peruana", 
                fechaNacimiento: "1936-03-28" },

            { id: 4, 
                nombre: "Jorge Luis Borges", 
                Nacionalidad: "Argentina", 
                fechaNacimiento: "1899-08-24" }
    ])
});


//EDNPOINT PARA UN AUTOR ESPECÍFICO
router.get('/:id',
    validatorHandler(getAutorSchema, 'params'),
    (req, res) => {

        // Datos de ejemplo de autores en un arreglo
        const autores = [
            { id: 1, 
                nombre: "Gabriel García Marquez", 
                Nacionalidad: "Colombiana", 
                fechaNacimiento: "1927-03-06" },

            { id: 2, 
                nombre: "Isabel Allende", 
                Nacionalidad: "Chilena", 
                fechaNacimiento: "1942-08-02" },

            { id: 3, 
                nombre: "Mario Vargas Llosa", 
                Nacionalidad: "Peruana", 
                fechaNacimiento: "1936-03-28" },

            { id: 4, 
                nombre: "Jorge Luis Borges", 
                Nacionalidad: "Argentina", 
                fechaNacimiento: "1899-08-24" }];

        // Extrae el ID del parámetro de la ruta
        const { id } = req.params;
        // Buscar el autor con el ID proporcionado y lo envía en la respuesta
        const autor = autores.find(autor => autor.id === parseInt(id));

        res.send(autor)
    });

//ENDPOINT CREAR UN NUEVO AUTOR
router.post('/', 
    validatorHandler(createAutorSchema, "body"),
    (req, res) => {
    const autores = [
        { id: 1, 
                nombre: "Gabriel García Marquez", 
                Nacionalidad: "Colombiana", 
                fechaNacimiento: "1927-03-06" },

            { id: 2, 
                nombre: "Isabel Allende", 
                Nacionalidad: "Chilena", 
                fechaNacimiento: "1942-08-02" },

            { id: 3, 
                nombre: "Mario Vargas Llosa", 
                Nacionalidad: "Peruana", 
                fechaNacimiento: "1936-03-28" },

            { id: 4, 
                nombre: "Jorge Luis Borges", 
                Nacionalidad: "Argentina", 
                fechaNacimiento: "1899-08-24" }];

    // Extrae la información del cuerpo de la solicitud
    const info = req.body;
    // Agrega la nueva información al arreglo de autores y la envía en la respuesta
    autores.push(info);
    res.send(autores)
});

//ENDPOINT ACTUALIZAR UN AUTOR
router.put('/:id', 
    validatorHandler(updateAutorSchema, "body"),
    (req, res) => {

    const autores = [
        { id: 1, 
                nombre: "Gabriel García Marquez", 
                Nacionalidad: "Colombiana", 
                fechaNacimiento: "1927-03-06" },

            { id: 2, 
                nombre: "Isabel Allende", 
                Nacionalidad: "Chilena", 
                fechaNacimiento: "1942-08-02" },

            { id: 3, 
                nombre: "Mario Vargas Llosa", 
                Nacionalidad: "Peruana", 
                fechaNacimiento: "1936-03-28" },

            { id: 4, 
                nombre: "Jorge Luis Borges", 
                Nacionalidad: "Argentina", 
                fechaNacimiento: "1899-08-24" }];

    // Extrae el ID del parámetro de la ruta y la información del cuerpo de la solicitud
    const { id } = req.params;
    const info = req.body;
    // Encuentra la posición del autor a reemplazar
    const reemplazarAutor = autores.findIndex(autor => autor.id === parseInt(id));
    // Reemplaza el autor en el arreglo con la nueva información
    autores.splice(reemplazarAutor, 1, info);

    res.send(autores)
});

//ENDOINT PATCH
router.patch('/:id', (req, res) => {
    const autores = [
       { id: 1, 
                nombre: "Gabriel García Marquez", 
                Nacionalidad: "Colombiana", 
                fechaNacimiento: "1927-03-06" },

            { id: 2, 
                nombre: "Isabel Allende", 
                Nacionalidad: "Chilena", 
                fechaNacimiento: "1942-08-02" },

            { id: 3, 
                nombre: "Mario Vargas Llosa", 
                Nacionalidad: "Peruana", 
                fechaNacimiento: "1936-03-28" },

            { id: 4, 
                nombre: "Jorge Luis Borges", 
                Nacionalidad: "Argentina", 
                fechaNacimiento: "1899-08-24" }]

    const { id } = req.params
    const info = req.body
    const replazaceIndex1 = autores.find(autor => autor.id === Number(id));
    const replazaceIndex = autores.findIndex(autor => autor.id === Number(id));
    const variable = { ...replazaceIndex1, ...info }
    autores.splice(replazaceIndex, 1, variable)
    res.send(autores)
})

//ENDPOINT ELIMINAR UN AUTOR
router.delete('/:id', 
    validatorHandler(getAutorSchema, "params"),
    
    (req, res) => {
    const autores = [
        { id: 1, 
                nombre: "Gabriel García Marquez", 
                Nacionalidad: "Colombiana", 
                fechaNacimiento: "1927-03-06" },

            { id: 2, 
                nombre: "Isabel Allende", 
                Nacionalidad: "Chilena", 
                fechaNacimiento: "1942-08-02" },

            { id: 3, 
                nombre: "Mario Vargas Llosa", 
                Nacionalidad: "Peruana", 
                fechaNacimiento: "1936-03-28" },

            { id: 4, 
                nombre: "Jorge Luis Borges", 
                Nacionalidad: "Argentina", 
                fechaNacimiento: "1899-08-24" }]

    // Extrae el ID del URL
    const { id } = req.params
                                                                                                                                                                        
    // Busca la posición del autor en mi arreglo de autores donde el id coincide con el que traje del url
    const buscarIndex = autores.findIndex(autor => autor.id === Number(id));
    //Ubica el autor, cuántos borra, que pone en su lugar
    const respuesta = autores.splice(buscarIndex, 1)

    res.send(autores)

})


module.exports = router; // Exporta el enrutador para usarlo en otros archivos