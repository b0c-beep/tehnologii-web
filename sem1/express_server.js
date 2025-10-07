const express = require('express');

const app = express();
const port = 8000;

app.use(express.static('./sem1/src/public'));

app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

app.get('/server/ping', (req, res) => {
    res.send('Pong');
});



app.listen(port, () => {
    console.log(`Express server running at http://localhost:${port}/`);
});