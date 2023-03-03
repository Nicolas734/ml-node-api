import Usuario from "../models/usuario.js"

export const buscarUsuarios = async (req, res) => {
    try{
        const dados = await Usuario.find()
        res.json(dados)
    }catch(error){
        res.json({message:error})
    }
}