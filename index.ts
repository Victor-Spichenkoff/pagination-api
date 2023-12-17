import express, { Express } from 'express'

const app:Express = express()

app.use(express.json())

app.get('/', (req, res) => {res.send('Olá')})

const Port = process.env.PORT || 2006 || 2010

app.listen(Port, () => console.log('NO AR'))