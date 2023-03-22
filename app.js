const mongoose = require('mongoose');
const express  = require('express')
require('dotenv').config()
const app = express()
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const cors = require('cors');
const path = require('path')
const authRoutes =  require("./routes/auth");



require('dotenv').config()
mongoose.connect(process.env.DATABASE,

{
   
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() =>{
    console.log("DB CONNTECTED")
}).catch(error => console.log(error));

app.use(bodyParser.json({limit: "50mb"}));
app.use(cookieParser());
app.use(cors());




//My Routes
app.use("",authRoutes)


const port = process.env.PORT || 4000;




app.listen(port,() =>{
    console.log(`Server is running at ${port}`)
})