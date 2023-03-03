import { Router } from "express";
import { buscarProdutos } from "../controllers/produtoController.js";


const router = Router()


router.get("/buscar", buscarProdutos)

export default router;