import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import {products} from "./products.js"
import userRouter from './routers/userRouter.js'

const app = express()
const port = process.env.PORT || 5000;
/*const connection_url = "mongodb://localhost/amazon-clone"

mongoose.connect(connection_url,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})*/



app.use(express.json());
app.use(cors());



app.get('/api/products',(req,res)=>{
    res.status(200).send(products);
})


app.get('/api/products/:id',(req,res)=>{
    const product = products.find(x => x.id == req.params.id);

    if(product){
        res.send(product);
    }
    else{
        res.status(404).send({message: 'Product not found.'});
    }
})


app.use("/api/users", userRouter);


app.get('/',(req,res)=>res.status(200).send('Hello Debjit here. It is Amazon clone project.'))





// Listening to  server

app.listen(port,()=>console.log(`Listening on local host:${port}`))