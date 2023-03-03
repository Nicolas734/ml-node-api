import { Router } from "express";
import { buscarUsuarios } from "../controllers/usuarioController.js";


const router = Router()


router.get("/buscar", buscarUsuarios)

export default router;
