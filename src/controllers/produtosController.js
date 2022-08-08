import produtos from '../models/Produto.js'

class ProdutoController {

    static listarProdutos = (req, res) =>{
        produtos.find((err, produtos) => {
            res.status(200).json(produtos);
          });
    }
}

export default ProdutoController;