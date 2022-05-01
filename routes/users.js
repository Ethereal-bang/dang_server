var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('User');
});

/*Get user by tel*/
router.get("/getUser/:tel", userController.user_info);

router.get("/login", userController.login);

router.get("/_showAll", userController._showAll);

router.get("/register", userController.register);

router.get("/getShoppingCart", userController.showShoppingCart);

router.get("/addShoppingCart", userController.addShoppingCart);

module.exports = router;
