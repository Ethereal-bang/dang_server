var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('User');
});

/*Get user by tel*/
router.get("/getUser", userController.user_info);

module.exports = router;
