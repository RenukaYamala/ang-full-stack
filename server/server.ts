// import express from 'express';
let express = require('express');
let http = require('http');

const app = express();

// app.use((req, res, next) => {
// res.header('Access-Control-Allow-Origin', '*');
// res.header('Access-Control-Allow-Header', 'Origin, X-Request');
// res.header('Access-Control-Allow-Methods', 'OPTIONS , GET, POST, PUT, DELETE');
// if ('OPTIONS' == req.methode)
// });
app.get('/', (req, res) => {
    res.send({});
});

app.listen(4201, '127.0.0.1', function() {
console.log('Server now listening on 4201');
});
