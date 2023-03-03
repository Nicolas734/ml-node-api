import { Router } from "express";
import { buscarVendedores } from "../controllers/vendedorController.js";



const router = Router()


router.get("/buscar", buscarVendedores)

export default router;