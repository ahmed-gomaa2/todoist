const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const connection = require('./config/db/db.config');

const registerRoute = require('./api/auth/register.route');
const loginRoute = require('./api/auth/login.route');
const logoutRoute = require('./api/auth/logout.route');
const loadUserRoute = require('./api/auth/load.user.route');
const createTodoRoute = require('./api/tasks/create.task');
const createProjectRoute = require('./api/tasks/create.project');
const makeTodoDone = require('./api/tasks/make.todo.done');
const makeProjectCompleted = require('./api/tasks/make.project-completed');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT']
}));


registerRoute(app);
loginRoute(app);
logoutRoute(app);
loadUserRoute(app);
createTodoRoute(app);
createProjectRoute(app);
makeTodoDone(app);
makeProjectCompleted(app);

const server = http.createServer(app);

app.get('/', (req, res) => {
    res.send('Hello from the application home');
});

const port = process.env.PORT || 5000;

server.listen(port, () => {
    console.log('Server is on the port:' + port);
});