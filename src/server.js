require('dotenv').config({path:'../.env'})
const client = require("./db.js")
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const userRouter = require('./router/user-route.js')
const port = process.env.PORT || 3000;


app.use(express.json())
app.use(bodyParser.json());


app.use("/api/v1/user", userRouter)




app.listen(port, ()=>{
    console.log(`Team server listening at port ${port}!`)
    client.connect(()=>{
        console.log('successfully connected to Database')
    });
})


