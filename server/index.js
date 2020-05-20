const express = require('express'),
    http = require('http'),
    path = require('path'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser');

const app = express();
const port = 3000;
const db = require("./db");
const dbName = "test";
const collectionName = "userData";

app.disable("x-powered-by");
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser(''));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));

require('./routes/index.js')(app);

db.initialize(dbName, collectionName, function(dbCollection) { // successCallback
    // get all items
    dbCollection.find().toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
    });

    // << db CRUD routes >>

}, function(err) { // failureCallback
    throw (err);
});

app.listen(port);




