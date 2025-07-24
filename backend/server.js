// backend/server.js
import express from 'express';
// import dotenv from 'dotenv';
// import mongoose from 'mongoose';
import cors from 'cors';
import connectDB from './config/databaseconnect.js';
import authRoutes from './routes/authRoutes.js';
import venderrouter from './routes/vendorroutes.js';
import productRoutes from './routes/productRoutes.js';



// dotenv.config();
const app = express();

//connect mongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());



// Routes
app.use('/', (req,res) =>{
    res.send("hello backend gateway")
});

app.use('/api/auth', authRoutes);

app.use('/api/product', productRoutes);
app.use("/api/vendor", venderrouter);

app.listen(8000)
