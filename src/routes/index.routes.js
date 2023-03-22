import { Router } from 'express';
import { funcion } from '../controllers/index.controller.js';

const router = Router();

router.get("/",  funcion);

export default router;