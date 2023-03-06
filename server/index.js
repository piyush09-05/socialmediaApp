import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from './routes/posts.js';
 ///R7zUeOVx6N1FlA9o

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());


app.use('/posts', postRoutes);
const DB_URL = "mongodb+srv://piyush09:R7zUeOVx6N1FlA9o@cluster0.qaiji4j.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> {
    app.listen(PORT, () => {
        console.log('Server Listening')
    })
})
.catch((error) => {
    console.log(error.message)
})

// mongoose.set('useFindAndModify', false);