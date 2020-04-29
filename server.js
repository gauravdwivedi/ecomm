const express = require('express');
const app = express();

//Port number 8000 assinged to this server
const port = 8000;

//database 
const db = require('./config/mongoose');

//JSON Parser
app.use(express.urlencoded());
app.use(express.json());

//redirecting routes 
app.use('/', require('./routes'));

app.listen(port, function (err) {
    if (err) { console.log(err); return; }

    console.log(`Server is running in port : ${port}`);
});