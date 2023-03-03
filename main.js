import express from "express";
import * as dotenv from "dotenv";
import usuarioRouter from "./routes/usuarioRouter.js";
import produtoRouter from "./routes/produtoRouter.js";
import vendedorRouter from "./routes/vendedorRouter.js"
import startDb from "./config/db.js"

dotenv.config();
startDb()

const app = express();

app.use(express.json());

app.listen(process.env.PORT , () => console.log(`Servidor rodando na porta ${process.env.PORT}...`));


app.use('/usuario', usuarioRouter);

app.use('/produto', produtoRouter);

app.use('/vendedor', vendedorRouter)
