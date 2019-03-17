const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

function get_collection() {
    // Connection URL
    const url = 'mongodb://localhost:27017';

    // Database Name
    const dbName = 'kino';

    // Create a new MongoClient
    const client = new MongoClient(url);
    // Use connect method to connect to the Server
    client.connect(function(err) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
    
        const db = client.db(dbName);
        return db.collection; 
    });
}


function get_movies(day) {
    //const collection = get_collection();
    return ["Wladca Pierscieni", "Hobbit"];
}

console.log(get_movies());
