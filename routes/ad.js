const router = require("express").Router();
const adController = require("../controllers/adController");

router.get('/', function(req, res, next) {
    res.send('Ad');
});

router.get("/getAll", adController.showAll);

router.get("/getByPos")

module.exports = router;