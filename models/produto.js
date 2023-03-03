import mongoose from "mongoose";


const  {Schema} = mongoose;
const ObjectId = Schema.ObjectId;


export const produto = new Schema({
    _id: ObjectId,
    nome: String,
    data_postagem: { type: Date, default: Date.now },
    descricao: String,
    preco: Number,
    quantidade: Number
})

const Produto = mongoose.model('produtos', produto)

export default Produto
