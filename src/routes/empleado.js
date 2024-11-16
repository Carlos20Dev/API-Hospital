import { Router } from "express";
import { getEmpleado, getEmpleadoById, crearEmpleado, eliminarEmpleado } from "../controller/empleado-con";

const router = Router()

router.get('/empleado', getEmpleado)
router.get('/empleado/:id', getEmpleadoById)
router.post('/empleado', crearEmpleado)
router.delete('/empleado', eliminarEmpleado)

export default router
