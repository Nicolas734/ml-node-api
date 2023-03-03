import mongoose from "mongoose";
import endereco from "./endereco.js";


const  {Schema} = mongoose;
const ObjectId = Schema.ObjectId;


export const vendedor = new Schema({
    _id: ObjectId,
    nome: String,
    email: String,
    cnpj: Number,
    telefone: Number,
    enderecos: [endereco]
})

const Vendedor = mongoose.model('vendedores', vendedor)

export default Vendedor