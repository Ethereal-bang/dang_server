const router = require("express").Router();
const adController = require("../controllers/adController");

router.get('/', function(req, res, next) {
    res.send('Ad');
});

