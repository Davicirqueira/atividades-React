import express from 'express';
import cors from 'cors';

const servidor = express()
const port = 4000

servidor.use(express.json())
servidor.use(cors())

servidor.get('/cards', (req, res) => {

    let cards = [
        {
            titulo: 'Componentes',
            subtitulo: 'Assuntos',
            assuntos: '- Objetos e Listas de Objetos',
            data: '01/jan',
            status: 'Em andamento',
            entregaTrab: true
        },
        {
            titulo: 'Componentes',
            subtitulo: 'Assuntos',
            assuntos: '- Objetos e Listas de Objetos',
            data: '01/fev',
            status: 'Em andamento',
            entregaTrab: false
        }
    ]

    res.send(cards)
})

servidor.listen(port, () => console.log(`API ouvindo na porta ${port}`));