import express from 'express';
import products from './routes/products.js';


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use("/products/toys",products)


app.listen(4000, ()=>console.log("Port is listening: 4000"));