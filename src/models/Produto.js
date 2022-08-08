import mongoose from 'mongoose';

const produtoSchema = new mongoose.Schema(
    {
        id:{type:String},
        desc:{type: String, required: true},
        preco:{type: String, required: true },
    }
)

const produtos = mongoose.model('produtos', produtoSchema);

export default produtos;