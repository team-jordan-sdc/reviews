const seed = require('../seedHelpers.js');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config({path: '../../.env'});

const url = process.env.MONGO_DB_URL;

async function seedMongoDB() {
  let client;
  let filmObjectArray = [];

  try {
    client = await MongoClient.connect(url);
    console.log("Connected correctly to server");

    const db = client.db(process.env.MONGO_DB_NAME);
    console.log(process.env.MONGO_DB_NAME);
    const collections = await db.collections();

    if (collections.map(collection => collection.s.name).includes('reviews')) {
      console.log('dropping');
      await db.collection('reviews').drop();
    }

    // create one collection first before running insertmany
    await db.collection('reviews').insertOne(
      seed.generateFilmObject(1)
    );

    for(var i = 0, j = 2; i < process.env.MONGO_DB_QUERY_SEED_BATCH_COUNT; i++, j++) {   // tested with 1000
      console.log('i = ' + i);
      for (var k = 1; k <= process.env.MONGO_DB_QUERY_SEED_BATCH_SIZE
        ; k++, j++) { // tested with 10000
            filmObjectArray.push(seed.generateFilmObject(j));
      }

      await db.collection('reviews').insertMany(
        filmObjectArray, {ordered:false}
      );

      filmObjectArray = [];
    }
  } catch (err) {
    console.log(err.stack);
  }

  // Close connection
  client.close();
}

seedMongoDB();
