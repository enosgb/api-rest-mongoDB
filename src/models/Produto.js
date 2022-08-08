import mongoose from 'mongoose';

const produtoSchema = new mongoose.Schema(
    {
        id:{type:String},
        desc:{type: String, required: true},
        preco:{type: String, required: true },
        usuario:{type: mongoose.Schema.Types.ObjectId, ref: 'usuarios', require: true}
    }
)

const produtos = mongoose.model('produtos', produtoSchema);

export default produtos;