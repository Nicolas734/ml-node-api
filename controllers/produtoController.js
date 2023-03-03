import Produto from "../models/produto.js"

export const buscarProdutos = async (req, res) => {
    try{
        const dados = await Produto.find()
        res.json(dados)
    }catch(error){
        res.json({message:error})
    }
}