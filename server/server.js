require('dotenv').config();
const express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , cors = require('cors')
    , session = require('express-session')
    , app = express();

const { SESSION_SECRET, CONNECTION_STRING } = process.env;

const checkAuth = require(`${__dirname}/middlewares/checkAuth.js`); //---------> SIMULATION2 75D REQUEST LEVEL MIDDLEWARE. Imported here and used on proptery endpoints.

// ---------- CONTROLLERS ---------- //
const properties = require('./controllers/properties');
const users = require('./controllers/users');

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(`${__dirname}/../build`)); //------------> SIMULATION 1 74E

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));


//---------- ENDPOINTS ---------- //

// ===== properties ===== //

app.post('/api/properties', checkAuth, properties.create);
app.get('/api/properties', checkAuth, properties.getProperties);
app.delete('/api/properties/:id', checkAuth, properties.delete);

// ===== users ===== //

app.post('/api/users', users.login);
app.post('/api/register', users.register);
app.post('/api/logout', users.logout);


const port = 3001;
massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    app.listen(port, () => {
        console.log(`Now eavesdropping on ${port}`);
    });
});
