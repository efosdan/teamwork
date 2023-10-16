const client = require("./db.js")
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Team server listening at port ${port}!`)
    client.connect(()=>{
        console.log('successfully connected to Database')
    });
})
