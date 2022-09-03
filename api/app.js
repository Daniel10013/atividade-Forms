import express from 'express';
import cadastroRoutes from './Routes/cadastroRoutes.js'

const app = express()
app.use(express.json())

cadastroRoutes(app)

app.listen(1984, ()=>{
    console.log("API INICIADA NA PORTA 1984")
})