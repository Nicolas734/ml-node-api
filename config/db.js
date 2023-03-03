import mongoose from 'mongoose';
import * as dotenv from "dotenv";

dotenv.config()
const user = process.env.USER
const password = process.env.PASSWORD
const dataBase = process.env.DATABASE

const uri = `mongodb+srv://${user}:${password}@nicolas.yt3g1l9.mongodb.net/${dataBase}?retryWrites=true&w=majority`

const startDb = async () => {
    try{
        await mongoose.connect(uri);
        console.log("Conectado ao banco...");
    }catch(error){
        console.log(error);
        
    }
};

export default startDb
