const mongoose = require('mongoose');
const express  = require('express')
require('dotenv').config()
const app = express()
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const cors = require('cors');
const path = require('path')
const authRoutes =  require("./routes/auth");


app.use(
    cors({
      origin: ["*"],
      methods: ["GET", "POST", "DELETE"],
      credentials: true,
      origin: true,
    })
  );
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


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

//My Routes
app.use("",authRoutes)


const port = process.env.PORT || 4000;




app.listen(port,() =>{
    console.log(`Server is running at ${port}`)
})