const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
// import express from "express";

const app = express();

mongoose.connect(
    "mongodb+srv://omnistack:omnistack@cluster0-lzfmn.mongodb.net/week10?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);
app.use(cors());
app.use(express.json());

//Métodos HTTP GET,POST,PUT e DELETE

//Tipos Parametros
// Query Params: request.query (Filtros, ordenação, paginação ...)
// Route Params: request.params (Identificar um recurso na alteração ou na remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

//MongoDB (Não Relacional)

app.use(routes);

app.listen(3333);
