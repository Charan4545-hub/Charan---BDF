
const express = require('express');

const app = express();

// GET /
app.get('/', (req, res) => {
    res.status(200).send('Welcome to BDF Lab 1!');
});

// GET /about
app.get('/about', (req, res) => {
    res.status(200).json({
        name: 'Charan',
        section: '252U1R1040'
    });
});

// GET /time
app.get('/time', (req, res) => {
    res.status(200).send(new Date().toString());
});

// Unknown routes
app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
