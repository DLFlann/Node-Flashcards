const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.set('view engine', 'pug');

app.use((req, res, next) => {
    console.log('Hello');
    next();
});

app.use((req, res, next) => {
    console.log('World');
    next();
});

app.get('/', (req, res) => {
    const name = req.cookies.username;
    if (name) {
        res.render('index', { name });
    } else {
        res.redirect('/hello');
    }
});

app.get('/cards', (req, res) => {
    res.render('card', {prompt: "Who is burried in Grant's tomb?"});
});

app.get('/hello', (req, res) => {
    if (req.cookies.username) {
        res.redirect('/')
    } else {
        res.render('hello');
    }
});

app.post('/hello', (req, res) => {
    res.cookie('username', req.body.username);
    res.redirect('/');
});

app.post('/goodbye', (req, res) => {
    res.clearCookie('username');
    res.redirect('/hello');
});

app.listen(8000, () => {
    console.log('The application is running at 127.0.0.1, port 8000');
});