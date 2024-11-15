import express from 'express'
import config from './config'
import { getConnection } from './db'
import empleadoRoutes from './routes/empleado'

getConnection()

const app = express()

app.set('port',config.PORT)

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.get('/', (req, res) => {
    res.send('Hola esta es mi api')
})
app.use(empleadoRoutes)

export default app