const express = require('express'),
    http = require('http'),
    path = require('path'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://<illich1912%40gmai.com>:<jdr2S5z8055650jd>@cluster0-bumjw.mongodb.net/test?retryWrites=true&w=majority";
const app = express();
const port = 3000;
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});

app.disable("x-powered-by");
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser(''));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));

require('./routes/index.js')(app);

app.listen(port);




