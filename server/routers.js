const controller = require('./controllers');
const router = require('express').Router();

//connect controller methods to the corresponding routes
router.get('/cows', controller.cowlist.get);

router.post('/cows', controller.cowlist.post);

//router.put('api/cows:id', controller.cows.put);

//router.delete('api/cows:id', controller.cows.delete);

module.exports = router;