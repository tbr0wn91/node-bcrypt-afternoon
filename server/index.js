require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const app = express();
const authCtrl = require('../controllers/authController');
const treasureCtrl = require('../controllers/treasureController');

app.use(express.json());

const {SESSION_SECRET, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING).then(db => {
     app.set("db", db);

    console.log(`connected to the db`)
})

app.use(session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: false
}));


app.post('/auth/register', authCtrl.register)

app.post('/auth/login', authCtrl.login)

app.get('/auth/logout', authCtrl.logout)

app.get('/api/treasure/dragon', treasureCtrl.dragonTreasure);



const PORT = 4000;
app.listen(PORT, () => console.log(`we good on port ${PORT}`));