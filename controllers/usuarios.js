const { response, request } = require('express');


const usuariosGet = ( req = request, res = response) => {

    const { nombre = 'no name', apikey, page = 1, limit} = req.query;
    
    res.json({
        msg: 'get API - usuarioGet',
        nombre,
        apikey,
        page,
        limit
    });
};

const usuariosPut = ( req, res ) => {

    const {id} = req.params;

    res.json({
        msg: 'put API - usuarioPut',
        id
    });
};

const usuariosPost = ( req, res ) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API - usuarioPost',
        nombre,
        edad
    });
};

const usuariosPatch = ( req, res ) => {
    res.json({
        msg: 'patch API - usuarioPatch'
    });
};

const usuariosDelete = ( req, res ) => {
    res.json({
        msg: 'delete API - usuarioDelete'
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}