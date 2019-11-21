const controller = require('./controllers');
const router = require('express').Router();

//connect controller methods to the corresponding routes
router.get('/cows', controller.cowlist.get);

router.post('/cows', controller.cowlist.post);

router.put('/cows:id', controller.cowlist.put);

router.delete('/cows:id', controller.cowlist.delete);

module.exports = router;