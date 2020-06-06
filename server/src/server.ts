import express from "express"
import cors from 'cors'
import path from 'path'
import routes from "./routes"
const app = express()
import {errors} from 'celebrate'


app.use(cors())
app.use(express.json())
app.use(routes)
// caminho para pegar as imagens relacionadas ao seeds. Arquivos estáticos.
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads'))) 

app.use(errors())

app.listen(3333)