const cassandra = require('cassandra-driver');
const seed = require('../seedHelpers.js');
require('dotenv').config({path: '../../.env'});

const client = new cassandra.Client({
  contactPoints: [process.env.CASSANDRA_CONTACT_POINT1],
  localDataCenter: process.env.CASSANDRA_DATACENTER1,
  keyspace: process.env.CASSANDRA_KEYSPACE_NAME
});

async function insertAllSeeds() {

  var globalRowCount = 1;
  const query = 'insert into moodukeyspace.films JSON ?';
  var queries = [];

  console.time('insert time');

  for(var i = 1; i <= CASSANDRA_SEED_BATCH_COUNT; i++) {

    for(var j = 1; j <= CASSANDRA_SEED_BATCH_SIZE; j++) {
      queries.push({
        query: query,
        params: [JSON.stringify(seed.generateFilmObject(globalRowCount++))]
      });
    }

    await client.batch(queries, {prepare:true})
          .then(result => console.timeLog('insert time'))
          .catch(err=> console.log(err));

    queries = [];
  }
}

insertAllSeeds();
