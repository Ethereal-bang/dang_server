const router = require("express").Router();
const adController = require("../controllers/adController");

router.get('/', function(req, res, next) {
    res.send('Ad');
});

router.get("/_showAll", adController.showAll);

router.get("/getByPos/:pos", adController.getByPos);

module.exports = router;