const loremIpsum = require("lorem-ipsum").loremIpsum;

// used for generating review paragraphs
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

// used for generating titles
const generateWords = (num) => {
  return  loremIpsum({
    count: num,        // Number of "words"
    format: "plain",   // "plain" or "html"
    units: "words"     // paragraph(s), "sentence(s)", or "word(s)"
  })
}

const generateTitles = () => {
  const numOfWordsInTitle = getRandomNum(1,4);  // generate random words for Title
  return  loremIpsum({
    count: numOfWordsInTitle,                   // Number of "words"
    format: "plain",                            // "plain" or "html"
    units: "words"                              // "word(s)"
  })
}

const getRandomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomDate(date1, date2){

  date1 = new Date(date1).getTime();
  date2 = new Date(date2).getTime();

  //return new Date(getRandomNum(date2,date1)).toLocaleDateString();
  return new Date(getRandomNum(date2,date1)).toISOString().slice(0,10);
}

const generateFilmObject = (id) => {
  var filmObj = {};
  filmObj.filmindex = id;
  filmObj.cc = generateWords(1);
  filmObj.hdx = generateWords(4);
  filmObj.language = generateWords(1);
  filmObj.length = getRandomNum(80,200);
  filmObj.name = generateTitles();
  filmObj.rating = getRandomNum(20,100);
  filmObj.released= getRandomDate('07/07/2019', '01/01/2000');
  filmObj.reviews = generateReviews();
  filmObj.sd = generateWords(4);
  filmObj.studio = generateWords(1);
  filmObj.uhd = generateWords(4);
  return filmObj;
};


const generateReviews = () => {
  var reviews  =[];

  // generate random number of reviews
  const numOfReviews = getRandomNum(2,6);

  for (var i = 1; i < numOfReviews; i++){
    var reviewObj = {};
    reviewObj.id = i;
    reviewObj.content = generateSentences();
    reviewObj.author = generateWords(2);
    reviewObj.rating = getRandomNum(20,100);
    reviewObj.source = generateWords(1);
    reviewObj.createdat = getRandomDate('07/31/2019', '05/01/2019');
    reviews.push(reviewObj);
  }
  return reviews;
};

module.exports = {
  generateFilmObject,
  generateReviews
};