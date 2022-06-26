import express from "express";
import livros from "./livrosRoutes.js"
import autores from "./autoresRoutes.js"

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Curso de Node - API de amarzenamento de Livros"})
    })

    app.use(
        express.json(),
        livros,
        autores
    )
}

export default routes