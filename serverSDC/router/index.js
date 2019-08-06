const controller = require('../controllers/index.js');
const router = require('express').Router();

router.get('/reviews', controller.getOneFilmRow);

router.post('/reviews', controller.postOneFilmRow);

module.exports = router;