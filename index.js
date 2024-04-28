import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()


mongoose.connect(process.env.MONGO_DB_CONNECTION).then(()=>{
    console.log('Connected to MongoDB')
})
.catch((error) =>{ 
    console.log(`Error connecting to MongoDB ${error}`)})

const app = express();

app.listen(3000, ()=>{
    console.log('listening on PORT 3000')
})
