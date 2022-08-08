import express from 'express';
import ProdutoController from '../controllers/produtosController.js'

const router = express.Router();

router
    .get('/produtos', ProdutoController.listarProdutos)

export default router;
