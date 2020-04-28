const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const mongoose = require('mongoose')

const PORT = '3000';

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(cors())

mongoose.connect('mongodb://localhost:27017/test-mongo', {useNewUrlParser: true, useUnifiedTopology: true})

app.use("/users", require("./routes/user"));

if (process.env.NODE_ENV !== "test") {
    app.listen(PORT, ()=> {
        console.log('server is listening on port ' + PORT )
    })
  }

  module.exports = app