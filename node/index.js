const express = require("express")
//inicializando o express e guardando na variável app
const app = express()

app.listen('3000', () => console.log('Server is up and running on port number 3000'))

app.use(express.json())
    
let author = "Ígara Yasmin"

app.route('/').get( (req, res) => res.send(req.query.name))
app.route('/').post( (req, res) => {
    res.send(req.body)
})
app.route('/').put( (req, res) => {
    author = req.body.author
    res.send(author)
})
app.route('/:id').delete( (req, res) => {
    author = ""
    res.send(req.params.id)
})

/*Parâmetros:

    ->req.query.name (url: http://localhost:3000/?name=Igara)
    [posso passar qualquer nome depois do query. mas na url tenho que chamar com esse nome que eu defini, por exemplo, poderia ser req.query.cidade => url: (...)/?cidade=cg]
    podemos usar varias variáveis na rota juntando com o & 
    (...)?nome=Ígara&cidade=Cg nesse caso se eu trouxer o req.query vou ter um json com essas informações

    ->req.body (O que eu passo no body em json podemos pegar várias informações)

    ->req.params.id (url: http://localhost:3000/01dfsr) qualquer coisa após a url vai ser o id
    [app.route('/:id').get(res,req => res.send(req.params.id))]


*/