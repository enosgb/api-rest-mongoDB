import produtos from "../models/Produto.js";

class ProdutoController {
  static listarProdutos = (req, res) => {
    produtos.find()
    .populate('usuario')
    .exec((err, produtos) => {
      res.status(200).json(produtos);
    });
  };

  static listarProdutoPorId = (req, res) => {
    const id = req.params.id;

    produtos.findById(id)
    .populate('usuario', 'nome')
    .exec((err, produto) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} - id de produto não encontrado` });
      } else {
        res.status(200).send(produto);
      }
    });
  };

  static cadastrarProduto = (req, res) => {
    let produto = new produtos(req.body);

    produto.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao cadastrar produto.` });
      } else {
        res.status(201).send(produto.toJSON());
      }
    });
  };

  static atualizarProduto = (req, res) => {
    const id = req.params.id;

    produtos.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Produto atualizado com sucesso" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static excluirProduto = (req, res)=>{
    const id = req.params.id

    produtos.findByIdAndDelete(id, (err)=>{
        if(!err){
            res.status(200).send({message : 'Produto removido com sucesso!'})
        }else{
            res.status(500).send({message: err.message})
        }
    })
  }

  static listarProdutoPorUsuario = (req, res)=>{
    const usuario = req.params.query.usuario

    produtos.find({'usuario': usuario}, {}, (err, produtos)=>{
        res.status(200).send(produtos);
    })
  }

}

export default ProdutoController;
