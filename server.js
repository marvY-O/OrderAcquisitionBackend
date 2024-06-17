const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const authRoutes = require('./Auth/auth')

const app = express();

const cors = require('cors');    

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Origin', 'GET', 'POST', 'PUT', 'DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(cors());
app.use(bodyParser.json());

const server = http.createServer(app);

app.use('/auth', authRoutes);

server.listen(3000, function listening() {
    console.log('Listening on %d', server.address().port);
});