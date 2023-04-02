const { response, request } = require('express');


const usersGet = (req = request, res = response) => {

    //*Para obtener una cantidad indeterminada de parametros opcionales:
    const queryParams = req.query;

    res.json({
        "msg": 'get API - controller'
    })
}

const userPut = (req, res = response) => {

    //* Se recibe id dentro de los params
    const id = req.params.id; 

    //** Tambien puede ser desestructurado como: */
    // const { id } = req.params;


    res.json({
        "msg": 'put API - controller',
        id
    })
}

const userPost = (req, res = response) => {

    // const body = req.body;
    const {name, rol} = req.body;

    res.json({
        "msg": 'post API - controller',
        name,
        rol
    })
}

const userDelete = (req, res = response) => {
    res.json({
        "msg": 'delete API - controller'
    })
}



module.exports = {
    usersGet,
    userPut,
    userPost,
    userDelete
}