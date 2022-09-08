const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT']
}));

const server = http.createServer(app);

app.get('/', (req, res) => {
    res.send('Hello from the application home');
});

const port = process.env.PORT || 5000;

server.listen(port, () => {
    console.log('Server is on the port:' + port);
})