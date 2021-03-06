// db.js

// mongodb driver
const MongoClient = require("mongodb").MongoClient;
const dbConnectionUrl = "mongodb+srv://Adm1m_123:Adm1m_1234@cluster0-bumjw.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(dbConnectionUrl, { useNewUrlParser: true });

function initialize(
    dbName,
    dbCollectionName,
    successCallback,
    failureCallback
) {
    client.connect(function(err, dbInstance) {
        if (err) {
            console.log(`[MongoDB connection] ERROR: ${err}`);
            failureCallback(err); // this should be "caught" by the calling function
        } else {
            const dbObject = dbInstance.db(dbName);
            const dbCollection = dbObject.collection(dbCollectionName);
            console.log("[MongoDB connection] SUCCESS");

            successCallback(dbCollection);
        }
    });
}

module.exports = {
    initialize
};