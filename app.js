const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/cards', (req, res) => {
    res.render('card', {prompt: "Who is burried in Grant's tomb?"});
});

app.get('/hello', (req, res) => {
    res.render('hello');
});

app.post('/hello', (req, res) => {
    res.render('hello');
});

app.listen(8000, () => {
    console.log('The application is running at 127.0.0.1, port 8000');
});