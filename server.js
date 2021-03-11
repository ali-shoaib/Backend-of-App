/*let http = require('http');
let path = require('path');
let fs = require('fs');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end("<h1>Hey World :)</h1>");
    }
})

const port = process.env.port || 1000;

server.listen(port,()=>console.log(`server is running on port: ${port}`));*/

if(process.env.NODE_ENV !== 'production'){
    require('dotenv');
}

const express = require('express');
const app = express();
const port = process.env.port || 4000;
const expressLayouts = require('express-ejs-layouts');
const indexRouter = require('./routes/index');

app.set('view engine','ejs');
app.set('views',__dirname + '/views');
app.set('layout','layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true})
const db = mongoose.connection;
db.on('error',error => console.error(error));
db.once('open',() => console.log('connected to database!'))

app.use('/',indexRouter);

app.listen(port,()=>console.log(`Server is rinning on ${port}`));