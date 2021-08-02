const { response } = require('express');


const usuariosGet = (req, res = response) => {

    const { q, nombre = 'No name'} = req.query;

    res.status(200).json({
        msg: "get API - Controlador!!", 
        q, 
        nombre
    });
}


const usuariosPut = (req, res = response) => {

    const id = req.params.id


    res.status(400).json({
        msg: "missing data", 
        id
    });
}
const usuariosPost = (req, res = response) => {

    const { name, age } = req.body;

    res.status(201).json({
        msg: "post API", 
        name, 
        age
    });
}
const usuariosDelete = (req, res = response) => {
    res.json({
        msg: "delete API"
    });
}

module.exports = {
    usuariosGet, 
    usuariosPut,
    usuariosPost,
    usuariosDelete
}