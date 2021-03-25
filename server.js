const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//Routers
const post_router = require('./routes/post');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//Database Connection
const uri = process.env.ATLAS_URI;      //Database Live Connection
//const uri = process.env.LOCAL_URI;      //Database Local COnnection
mongoose.connect(uri, {useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology:true});

const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log('MongoDB Connection is Established!');
})

app.use('/posts', post_router);

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})
