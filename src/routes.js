const { Router } = require('express')
const routes = Router()
const clientController = require('./modules/Cliente/ClienteControler')
const livroController = require('./modules/Livro/LivroControler')
const aluguelController = require('./modules/Aluguel/AluguelControler')


routes.get('/', (req, res) => {
    return res.json('Server up!')
})

routes.get('/cliente', clientController.get)
routes.post('/cliente', clientController.create)
routes.delete('/cliente/:id', clientController.clienteDelete)

routes.get('/livro', livroController.get)
routes.post('/livro', livroController.create)
routes.post('/livro/:id', livroController.putIsAlterado)
routes.delete('/livro/:id', livroController.livroDelete)

routes.get('/aluguel', aluguelController.get)
routes.post('/aluguel', aluguelController.create)
routes.put('/aluguel', aluguelController.put)
routes.delete('/aluguel/:id', aluguelController.aluguelDelete)

module.exports = { routes }