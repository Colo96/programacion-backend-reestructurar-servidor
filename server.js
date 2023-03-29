const express = require('express');
const apiRouter = require('./src/routers/app.routers');

const PORT = 8080;

const app = express();

app.use(express.json());
app.use('/api', apiRouter);

const server = app.listen(PORT, () => {
    console.log('Ready on port ' + PORT);
});

server.on('error', (error) => {
    console.log('There was an error in the server: ');
    console.log(error)
});