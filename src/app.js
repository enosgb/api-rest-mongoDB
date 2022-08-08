import express from "express";
import db from "./config/dbConnect.js";
import produtos from "./models/Produto.js";

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("Conexão com o banco realizada com sucesso!");
});

const app = express();

app.use(express.json());

/*
const produtos = [
    {"id":1,"descricao":"coca-cola","preco":"8,00"},
    {"id":2,"descricao":"pepsi","preco":"10,00"},
    {"id":3,"descricao":"fanta","preco":"7,50"}
]
*/

app.get("/", (req, res) => {
  res.status(200).send("api de produtos rodando");
});

app.get("/produtos", (req, res) => {
  produtos.find((err, produtos) => {
    res.status(200).json(produtos);
  });
});

export default app;
