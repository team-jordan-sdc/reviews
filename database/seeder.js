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


const titles = ['The Shawshank Redemption','The Godfather','The Godfather, Part II','The Dark Knight',
  '12 Angry Men','Schindlers List','Pulp Fiction','The Lord of the Rings: The Return of the King',
  'The Good, the Bad, and the Ugly','Fight Club','The Lord of the Rings: The Fellowship of the Ring',
  'Forrest Gump','Star Wars: Episode V: The Empire Strikes Back','Inception',
  'The Lord of the Rings: The Two Towers','One Flew Over The Cuckoos Nest','GoodFellas','The Matrix',
  'The Seven Samurai','Star Wars','City of God','Se7en','The Silence of the Lambs','Its A Wonderful Life',
  'Life is Beautiful','The Usual Suspects','Leon, aka The Professional','Saving Private Ryan',
  'Spirited Away','Coco','American History','Interstellar','Once Upon a Time in the West',
  'The Green Mile','Psycho','Casablanca','City Lights','Intouchables','Modern Times','The Pianist',
  'Raiders of the Lost Ark','The Departed','Rear Window','Terminator 2: Judgment Day','Back to the Future',
  'Whiplash','Gladiator','The Lion King','The Prestige','Memento','Apocalypse Now','Alien','The Great Dictator',
  'Sunset Boulevard','Cinema Paradiso','Dr. Strangelove','The Lives of Others','Grave of the Fireflies',
  'Paths of Glory','Django Unchained','The Shining','WALL-E','American Beauty','Princess Mononoke',
  'The Dark Knight Rises','Blade Runner 2049','Oldboy','Witness For the Prosecution','Aliens',
  'Once Upon a Time in America','Das Boot','Dangal','Citizen Kane','Vertigo','North By Northwest',
  'Star Wars: Episode VI - Return of the Jedi','Braveheart','Reservoir Dogs','M','Requiem for a Dream',
  'Your Name','Like Stars on Earth','Amelie','A Clockwork Orange','Lawrence of Arabia','Amadeus',
  'Double Indemnity','Eternal Sunshine of the Spotless Mind','Taxi Driver','To Kill A Mockingbird',
  'Full Metal Jacket','Singin In The Rain','2001: A Space Odyssey','Toy Story','3 Idiots','The Sting',
  'Toy Story 3','Inglourious Basterds','The Bicycle Thief','The Kid'];

const getRandomNum = (min,max) => {
  return Math.floor(Math.random() * (+max - +min)) + +min;
}

function getRandomDate(date1, date2){
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  date1 = date1 || '01-01-1970'
  date2 = date2 || new Date().toLocaleDateString()
  date1 = new Date(date1).getTime()
  date2 = new Date(date2).getTime()
  if( date1>date2){
    return new Date(getRandomArbitrary(date2,date1)).toLocaleDateString()
  } else{
    return new Date(getRandomArbitrary(date1, date2)).toLocaleDateString()

  }
}

const  generateProductsObject = (id) => {
  return {
    index: id,
    prodname: generateWords(2),
    price: getRandomNum(100,5000),
    picture: generateWords(1),
    about: generateWords(4)
  }
}

const generateReviewObject = (id) => {
  return {
    index: id,
    filmname: titles[id],
    length: getRandomNum(80,200),
    released: getRandomDate('07/07/2019', '01/01/2000'),
    rating: getRandomNum(20,100),
    studio: generateWords(1),
    language: generateWords(1),
    uhd: generateWords(4),
    hdx: generateWords(4),
    sd: generateWords(4),
    cc: generateWords(1),
    reviews: generateReviews(12)
  }

}


const generateReviews = (num) => {
  var reviews  =[];

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

    if (collections.map(collection => collection.s.name).includes('reviews')) {
      await db.collection('reviews').drop();
    }

    if (collections.map(collection => collection.s.name).includes('products')) {
      await db.collection('products').drop();
    }


    for (var i = 0; i < 100; i++) {
      await db.collection('reviews').insertOne(
        generateReviewObject(i)
      );

      await db.collection('products').insertOne(
        generateProductsObject(i)
      );

    }

  } catch (err) {
    console.log(err.stack);
  }

  // Close connection
  client.close();
}


module.exports.seed = seed;

