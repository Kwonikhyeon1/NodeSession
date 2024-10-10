const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const compression = require('compression');
const { MemoryStore }  = require('express-session');
const session = require('express-session');

app.use(bodyParser.urlencoded({extended: false}));
app.use(compression());
app.use(express.static('./public'));

app.set('view engine', 'ejs');
app.set('views', './views/');

const maxAge = 1000 * 60 * 30;
const sessionObj = {
    secret: 'green',
    resave: false,
    saveUninitialized: true,
    store: new MemoryStore({checkPeriod: maxAge}),
    cookie: {
        maxAge: maxAge,
    },
}

app.use(session(sessionObj));

// 홈('/') 라우팅
app.get('/', (req, res) => {
    console.log('/');

    res.redirect('/home');

});

// 라우터
app.use('/home', require('./routes/home'));
app.use('/member', require('./routes/member'));

app.listen(3000);