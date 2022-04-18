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

exports._deleteAll = (req, res, next) => {
    Goods.deleteMany({})
        .exec((error, result) => {
            if (error) {
                res.send(error);
            } else {
                res.send("删除成功" + result.deletedCount);
            }
        })
}