require('dotenv').config();
const express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , cors = require('cors')
    , session = require('express-session')
    , app = express();

const { SESSION_SECRET, CONNECTION_STRING } = process.env;

const checkAuth = require('./middlewares/checkAuth');

app.use(bodyParser.json());
app.use(cors());

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));










const port = 3001;
massive(CONNECTION_STRING).then(db => { app.set('db', db); });
app.listen(port, () => { console.log(`Now eavesdropping on ${port}`); });