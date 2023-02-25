const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function create(req, res) {
    const livro = await prisma.livro.create({
        data: req.body
    })
    res.json(livro)
}

async function get(req, res) {
    res.json(await prisma.livro.findMany())
}

async function putIsAlterado(req, res) {
    const livro = await prisma.livro.findUnique({
        where: {
            id: parseInt(req.params.id)
        }
    })

    livro.isAlugado = !livro.isAlugado

    const livroUpdate = await prisma.livro.update({
        data: livro,
        where: {
            id: livro.id
        }
    })

    return res.json(livroUpdate)
}

async function livroDelete(req, res) {
    const livroId = parseInt(req.params.id)

    const livro = await prisma.livro.delete({
        where: {
            id: livroId,
        },
    }).catch(()=>{
     return res.status(500).json('Livros vinculados a alugueis não podem ser excluidos')
    })
    return res.json(livro);
}

module.exports = { create, get, putIsAlterado, livroDelete }