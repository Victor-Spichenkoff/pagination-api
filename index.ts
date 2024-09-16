import express, { Express } from 'express'
const cors = require('cors')
import makeCurentPageArray from './functions/assembleArray'

const app:Express = express()

app.use(express.json())
app.use(cors())


app.get('/teste', (req, res) => res.send('Paginação'))

app.get('/', (req, res) => {res.send('Olá')})


var attemps = 0
app.get('/pagination', (req, res) => res.send("Hello, use the method PUT"))

app.put('/pagination', async (req, res) => {
    // console.log(req.body)
    // console.log(++attemps)
    
    try {
        const resDemorado = await makeCurentPageArray(req.body)
        const thisPageArray = resDemorado
        const finalObject = {
            pagination: req.body.pagination,
            itens: thisPageArray
        }

        if(req.body.pagination.page > req.body.pagination.totalPages) throw "Send a Body "


        res.send(finalObject)
    } catch(e) {
        res.status(400).send({ msg: e})
    }
})

const Port = process.env.PORT || 2006 || 2010

app.listen(Port, () => console.log('NO AR ' + Port))