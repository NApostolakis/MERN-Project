const epxress = require('express');
const HttpError = require('../models/http-error');
const router = epxress.Router();

const DUMMY_PLACES = [
    {
        id:'p1',
        title:'Mohos, Crete',
        description: 'Mochos is a traditional mountain village with narrow alleys and flower-filled courtyards. Its small town square is lined with al fresco cafes and tavernas, and features dancing and music every Wednesday night in summer. Several churches have Byzantine icons inside. The Bulgarian path, a hiking trail originally built by Bulgarian prisoners of war during WWI, leads to the coastal village of Stalida.',
        location:{        
         lat:35.26446769824055, 
         lng:25.42326384237168
        },
        address: 'Epar.Od. Stalidas - Gonion 240',
        creator: 'u1'
    }
];

router.get('/:pid',(req,res,next)=>{
    const placeId = req.params.pid;
    const place = DUMMY_PLACES.find(p => {
        return p.id === placeId;
    });
    if(!place){
      throw new HttpError('Could not find a place for the provided id', 404);;
    }
    res.json({place});
});


router.get('/user/:uid', (req, res, next)=>{
    const userId = req.params.uid;
    const place = DUMMY_PLACES.find(p => {
        return p.creator === userId;
    });
    if(!place){
      return next(new HttpError('Could not find a place for the provided user id', 404));
    }
    res.json({place});
});
module.exports = router;