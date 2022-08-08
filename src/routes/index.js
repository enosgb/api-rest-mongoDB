import express from 'express';
import produtos from './produtosRoutes.js'
import usuarios from './usuarioRoutes.js'

const routes = (app) =>{
    app.route('/').get((req,res)=>{
        res.status(200).send({message: "ok"})
    })

    app.use(
        express.json(),
        produtos,
        usuarios
    )
}

export default routes;