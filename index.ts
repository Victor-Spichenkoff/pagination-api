import express, { Express } from 'express'
const cors = require('cors')
import makeCurentPageArray from './functions/assembleArray'

const app:Express = express()

app.use(express.json())
app.use(cors())


app.get('/teste', (req, res) => res.send('Paginação'))

app.get('/', (req, res) => {res.send('Olá')})


var attemps = 0
app.put('/pagination', (req, res) => {
    console.log(req.body)
    console.log(++attemps)
    
    try {
        const thisPageArray = makeCurentPageArray(req.body)
        const finalObject = {
            pagination: req.body.pagination,
            itens: thisPageArray
        }

        if(req.body.pagination.page > req.body.pagination.totalPages) return


        res.send(finalObject)
    } catch(e) {
        res.status(400).send({ msg: e})
    }
})

const Port = process.env.PORT || 2006 || 2010

app.listen(Port, () => console.log('NO AR'))