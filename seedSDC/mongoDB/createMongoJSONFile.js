const fs = require('fs');
const seed = require('../seedHelpers.js');
require('dotenv').config({path: '../../.env'});

const jsonFileGenerator = () => {

  for (var i = 1; i <= process.env.JSON_FILE_ROW_COUNTS; i++) {
    if( i === 1 ) {
      fs.writeFileSync(process.env.JSON_FILE_NAME,
        JSON.stringify(seed.generateFilmObject(i)));
    } else {
      fs.appendFileSync(process.env.JSON_FILE_NAME,
        JSON.stringify(seed.generateFilmObject(i)));
    }
  }
  console.log('JSON file created: success');
}

jsonFileGenerator();