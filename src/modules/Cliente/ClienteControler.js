
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function create(req, res) {
    const cliente = await prisma.cliente.create({
        data: req.body
    })
    res.json(cliente)
}

async function get(req, res) {
    res.json(await prisma.cliente.findMany())
}

async function clienteDelete(req, res) {
    const clienteId = parseInt(req.params.id)

    const cliente = await prisma.cliente.delete({
        where: {
            id: clienteId,
        },
    }).catch(() => {
        return res.status(500).json('Cliente vinculados a alugueis não podem ser excluidos')
    })
    return res.json(cliente)
}

module.exports = { create, get, clienteDelete }