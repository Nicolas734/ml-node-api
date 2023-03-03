import mongoose from "mongoose";
import endereco from "./endereco.js";


const  {Schema} = mongoose;
const ObjectId = Schema.ObjectId;


const usuario = new Schema({
    _id: ObjectId,
    nome: String,
    email: String,
    telefone: Number,
    cpf: Number,
    rg: Number,
    data_nascimento: { type: Date, default: Date.now },
    enderecos: [endereco]
})

const Usuario = mongoose.model('usuarios', usuario)

export default Usuario
