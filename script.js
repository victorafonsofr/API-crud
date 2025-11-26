import express from 'express';

const app = express();
const port = 3000;

app.listen(port, console.log(`Escutando na porta ${port}: 'http://localhost:${port}'`));

app.get('/',(req,res)=>{
    res.send('o express funcionou')
});

//rota estática
app.get('/estatica', (req,res)=>res.send("pagina estatica"))

//rota dinamica
app.get('/dinamica/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    res.send(`exibindo o perfil do usuario com o id ${id}`);
})

