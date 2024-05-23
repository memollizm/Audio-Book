const express = require('express');
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express()
const productRouter = require('./routes/products')
const port = 3000

dotenv.config()
mongoose.connect(process.env.MONGO_URL).then(() => console.log("veri tabanına bağlantı başarılı")).catch((err) => console.log(err))


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))