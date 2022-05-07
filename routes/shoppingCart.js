var express = require('express');
var router = express.Router();
const shoppingCartController = require("../controllers/shoppingCartController");

router.get('/', function(req, res, next) {
    res.send('ShoppingCart');
});

router.get("/:tel/addGoods", shoppingCartController.addGoods);

router.get("/:shoppingCartId/show", shoppingCartController.show);

router.get("/:tel/reset", shoppingCartController.reset);

module.exports = router;