var express = require('express');
var router = express.Router();
const goodsController = require("../controllers/goodsController");

router.get('/', function(req, res, next) {
    res.send('Goods');
});

router.get("/showAll", goodsController.showAll);

router.get("/_deleteAll", goodsController._deleteAll);

router.get("/getByType/:type", goodsController.getByType);

module.exports = router;
