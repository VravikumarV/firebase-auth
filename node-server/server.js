const express = require("express");

const dbconfig = require("./src/config/dbconfig");

const userController = require('./src/controllers/UserController');

const PORT = process.env.PORT || 8181;

const bodyParser = require("body-parser");

const cors = require("cors");

//let userprofile = require('./models/userprofile');
//const router = require('express').Router();

var corsOptions = {
    origin: "http://localhost:3000"
};

const app = express();

const mongoose = require('mongoose');

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(dbconfig.url,
        {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });

const connection = mongoose.connection;

connection.once('open',()=>{
    console.log(" Connected to Mongo DB .... ");
    /*const db = connection.db('star-wars-quotes');
    const quotesCollection = db.collection('quotes')
      quotesCollection.insertOne({"qual": "MCA","qualDesc": "Compiuters"})
        .then(result => {
          console.log(result)
        })
        .catch(error => console.error(error))*/
});
  

app.get("/", (req, res) => {
    res.json({ message: "Welcome to node-server application." });
});

// We must export the routes and apply them to the router in Server.js for Node to load the routes and serve accordingly.
app.use('/api/signup/userprofiles',userController);


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});