const router = require('express').Router();
const birdsController = require('../controllers/birds.controller');

router.get('/', (res, req, next) => res.json({ok : true}));

//BIRDS
router.get('/birds', birdsController.list)
router.post('/birds', birdsController.create)
router.delete('/delete/:id', birdsController.delete)

module.exports = router;