import Vendedor from "../models/vendedor.js"

export const buscarVendedores = async (req, res) => {
    try{
        const dados = await Vendedor.find()
        res.json(dados)
    }catch(error){
        res.json({message:error})
    }
}