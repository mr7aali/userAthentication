const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 3000
//database connection 
main().catch(err => console.log(err));

async function main() {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/test');
    console.log("database connected 💕💕");
    }
    catch(err){
        console.log("Database Erro: fail to connect",err);
    }
   
}


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})