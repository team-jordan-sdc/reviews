const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

const loremIpsum = require("lorem-ipsum").loremIpsum;



const generateSentences = () => {
return  loremIpsum({
  count: 3,                // Number of "words", "sentences", or "paragraphs"
  format: "plain",         // "plain" or "html"
  paragraphLowerBound: 3,  // Min. number of sentences per paragraph.
  paragraphUpperBound: 7,  // Max. number of sentences per paragarph.
  random: Math.random,     // A PRNG function
  sentenceLowerBound: 5,   // Min. number of words per sentence.
  sentenceUpperBound: 15,  // Max. number of words per sentence.
  suffix: "\n",            // Line ending, defaults to "\n" or "\r\n" (win32)
  units: "sentences"     // paragraph(s), "sentence(s)", or "word(s)"
})
}

const generateWords = (num) => {
  return  loremIpsum({
    count: num,        // Number of "words"
    format: "plain",   // "plain" or "html"
    units: "words"     // paragraph(s), "sentence(s)", or "word(s)"
  })
  }


const titles = ['Captain America', 'Forrest Gump', 'Gone With The Wind', 'Bird Cage', 'The Lord Of The Rings', 'Harry Potter And The Order Of Phoenix', 'Get Smart', 'Die Hard', 'Mission Impossible', 'The Matrix', 'The Martian', 'Interstellar', 'It Might Get Loud', 'Spectre', 'Fat Albert', 'Monty Python And The Holy Grail', 'Die Another Day', 'The Happening', 'Beauty And The Beast', 'Gran Torino', 'Apollo 13', 'War Of The Worlds', 'Hancock', 'Independence Day', `Ender's Game`, 'The Fugitive', 'Birdman', 'Jurassic Park', 'Star Wars: A New Hope', 'The Hobbit: An Unexpected Journey', 'Men In Black'];


const getRandomNum = (min,max) => {
  return Math.floor(Math.random() * (+max - +min)) + +min;
}


const generateReviewObject = (id) => {
return {
  index: id,
  filmname: titles[getRandomNum(0,31)],
  reviews: generateReviews(5)
  }

}


const generateReviews = (num) => {
  var reviews  =[];
 // var reviewObj = {};
for (var i = 0; i < num; i++){
  var reviewObj = {};
  reviewObj.id = i;
  reviewObj.review = generateSentences();
  reviewObj.author = generateWords(2);
  reviewObj.rating = getRandomNum(20,100);
  reviewObj.source = generateWords(1);
  reviews.push(reviewObj);
}
return reviews;
};

async function  seed() {
  let client;

  try {
    client = await MongoClient.connect(url);
    console.log("Connected correctly to server");

    const db = client.db('moodu');
    const collections = await db.collections();
   if (collections.map(c => c.s.name).includes('reviews')) {
     await db.reviews.drop();
  }

  for (var i = 0; i < 100; i++) {
     await db.collection('reviews').insertOne(
      generateReviewObject(i)
    );
  }

  } catch (err) {
    console.log(err.stack);
  }

  // Close connection
  client.close();
};




module.exports.seed = seed;