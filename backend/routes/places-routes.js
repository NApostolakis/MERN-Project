const epxress = require('express');
const placesControllers = require('../controllers/places-controllers');
const router = epxress.Router();



router.get('/:pid', placesControllers.getPlaceById);


router.get('/user/:uid', placesControllers.getPlaceByUserId);
module.exports = router;