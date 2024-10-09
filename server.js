import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())

const users =[]

app.post('/usuarios', async(req, res)=>{
    //console.log(req.body)
    //users.push(req.body)
    await prisma.user.create({
        data:{
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })
    //res.send('ok post')
    res.status(201).json(req.body)
})

/*HTTP Métodos:
get=listar
post=criar
put=editar varios
patch=editar um
delete=deltar

Rotas:
1-tipo/metodo http
2-endereço=www.loja...
*/
app.get('/usuarios', (req, res)=>{
    //res.send('ok, deu bom')
    res.status(200).json(users)
})

//porta:
app.listen(3000)

/*
-criar nossa API de usuarios
-criar um usuario
-listar todos usuarios
-editar usuarios
-deletar usuarios
 */
//para servidor reiniciar sozinho qdo tiver alteração:
//node --watch server.js

//mongoDB:  renatomorenoagudo2
//014RxiOIbBewLl1U

//sit:prisma.io
//terminal: npm install prisma --save-dev
//terminal: npx prisma db push
//terminal: npx prisma studio


