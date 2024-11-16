import express from 'express'
import config from './config'
import { getConnection } from './db'
import empleadoRoutes from './routes/empleado'

getConnection()

const app = express()

app.set('port',config.PORT)

// Ruta para la raíz
app.get('/', (req, res) => {
    res.send('Bienvenido a la API del Hospital');
});

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use(empleadoRoutes)

export default app
