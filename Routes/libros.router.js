const express = require('express'); // Importa el módulo Express
const { boolean } = require('joi');
const router = express.Router();

const libros = [

    {
        id: 1,
        titulo: "Cien Años de Soledad",
        isbn: "978-0307474728",
        autor_id: 1,
        año_publicacion: 1967,
        genero: "Realismo mágico",
        disponible: true
    },


    {
        id: 2,
        titulo: "La Casa de los Espíritus",
        isbn: "978-0553273635",
        autor_id: 2,
        año_publicacion: 1982,
        genero: "Realismo mágico",
        disponible: false
    },


    {
        id: 3,
        titulo: "La ciudad y los perros",
        isbn: "978-8426417264",
        autor_id: 3,
        año_publicacion: 1962,
        genero: "Novela",
        disponible: false
    },


    {
        id: 4,
        titulo: "Ficciones",
        isbn: "978-8420674529",
        autor_id: 4,
        año_publicacion: 1944,
        genero: "Cuentos",
        disponible: true
    }

]

//ENDPOINT PARA LIBROS
router.get('/', (req, res) => {
    const {disponible} = req.query //capturo la query disponible
    if (disponible === false || disponible){ 
        const librosDisponibles = libros.filter(libro => libro.disponible === Boolean(disponible))
        return res.send(librosDisponibles)
    }
    
    res.send(libros)
});

//ENDPOINT PARA UN LIBRO ESPECÍFICO
router.get('/:id', (req, res) => {

    const { id } = req.params;
    const libro = libros.find(libro => libro.id === parseInt(id));
    res.send(libro)
})

//ENDPOINT CREAR UN NUEVO LIBRO
router.post('/', (req, res) => {

    const info = req.body;
    libros.push(info);
    res.send(libros)
});


//ENDPOINT PARA ACTUALIZAR LIBROS
router.put('/:id', (req, res) => {

    const { id } = req.params
    const info = req.body

    const indexLibroActualizar = libros.findIndex(libro => libro.id == parseInt(id))
    const libroActualizar = libros.find(libro => libro.id == parseInt(id))
    const libroActualizado = { ...libroActualizar, ...info }
    libros.splice(indexLibroActualizar, 1, info);
    res.send(libroActualizado)
})

router.delete('/:id', (req, res) => {

    const { id } = req.params;
    const posicionLibroEliminar = libros.findIndex(libro => libro.id === parseInt(id));
    //Si la condición no se cumple retorna -1:
    if (posicionLibroEliminar === -1){
       return res.send({message:"No fue posible eliminar, no existe el Id"})
    }
    libros.splice(posicionLibroEliminar, 1)
    res.send({ message: "Borrado con éxito", libros })
})




module.exports = router;