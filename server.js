import express from 'express'

const app = express()
app.use(express.json())

const users =[]

app.post('/usuarios',(req, res)=>{
    //console.log(req.body)
    users.push(req.body)
    res.send('ok post')
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
    res.json(users)
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

