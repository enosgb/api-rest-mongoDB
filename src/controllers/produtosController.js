import produtos from '../models/Produto.js'

class ProdutoController {

    static listarProdutos = (req, res) =>{
        produtos.find((err, produtos) => {
            res.status(200).json(produtos);
          });
    }

    static cadastrarProduto = (req,res)=>{
        let produto = new produtos(req.body);

        produto.save((err)=>{

            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar produto.`})
            }else{
                res.status(201).send(produto.toJSON());
            }
        })
    }

    static atualizarProduto = (req, res)=>{
        const id = req.params.id;

        produtos.findByIdAndUpdate(id, {$set: req.body}, (err)=>{
            if(!err){
                res.status(200).send({message: 'Produto atualizado com sucesso'})
            }else{
                res.status(500).send({message: err.message});
            }
        })
    }
}

export default ProdutoController;