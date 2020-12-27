import express from 'express'
import cors from 'cors'
import {data} from "./data.js"

const app = express()
const port = process.env.PORT || 5000



app.use(express.json());
app.use(cors());



app.get('/api/products',(req,res)=>{
    res.status(200).send(data);
})


app.get('/api/products/:id',(req,res)=>{
    const product = data.find(x => x.id == req.params.id);

    if(product){
        res.send(product);
    }
    else{
        res.status(404).send({message: 'Product not found.'});
    }
})


app.get('/',(req,res)=>res.status(200).send('Hello Debjit here. It is Amazon clone project.'))





// Listening to  server

app.listen(port,()=>console.log(`Listening on local host:${port}`))