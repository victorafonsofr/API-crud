import express from 'express'
import Repositorio from './repositorio.js'

const app = express()
app.use(express.json()) // interpre9ta o JSON

let tasks = new Repositorio();

app.get('/tarefas', (req,res)=>{
    res.json(tasks.readTask())
})

app.post('/tarefas', (req,res)=>{
    const newTask = tasks.createTask(req.body)
    res.status(201).json(newTask)
})

app.put('/tarefas/:id', (req, res)=>{
    const id = parseInt(req.params.id)

    try{
        const newTask = tasks.updateTask(id,req.body)
        res.json(newTask)

    }catch(error){
        return res.status(404).send(error)
    }
})

app.delete('/tarefas/:id', (req,res) => {
    const id = parseInt(req.params.id)
    tasks.deleteTask(id)
    res.status(204).send()
} )

app.listen(3000, console.log('funcionou'))