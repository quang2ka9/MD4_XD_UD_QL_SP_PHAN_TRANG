import express from 'express';
import bodyParser from "body-parser";
import mongoose from "mongoose";
import productRoutes from './src/router/product.router';

const PORT = 3000;
const app = express();
app.set('view engine', 'ejs');
app.set('views', './src/views');

const DB = 'mongodb://127.0.0.1:27017/produst';
mongoose.connect(DB)
.then(()=>console.log('DB connection!'))
.catch(error => console.log('DB connection error:' , error.message));

app.use(bodyParser.json());
app.use('/product', productRoutes);

app.listen(PORT, ()=>{
    console.log("App running on port:" + PORT)
})