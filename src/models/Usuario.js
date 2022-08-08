import mongoose from 'mongoose'

const usuarioSchema = new mongoose.Schema(
    {
        id:{type: String},
        nome:{type: String, required: true}
    },
    {
        versionKey: false
    }
)

const usuarios = mongoose.model('usuarios', usuarioSchema);

export default usuarios;