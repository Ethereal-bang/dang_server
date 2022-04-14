const Goods = require("../models/goods");

exports.showAll = (req, res, next) => {
    Goods.find({})
        .exec((err, goodsList) => {
            if (err) {
                res.json({
                    flag: false,
                    msg: err,
                })
            } else {
                res.json({
                    flag: true,
                    data: goodsList,
                })
            }
        })
}