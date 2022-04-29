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
                    data: {
                        count: goodsList.length,
                        list: goodsList,
                    },
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

exports.getByType = async (req, res, next) => {
    const {type} = req.params;
    await Goods.find({ type })
        .exec((err, goodsList) => {
            if (err) {
                res.json({
                    flag: false,
                    msg: err,
                })
            } else {
                res.json({
                    flag: true,
                    msg: `查询成功: ${type}`,
                    data: {
                        count: goodsList.length,
                        list: goodsList,
                    },
                })
            }
        })
}

exports.getById = async (req, res, next) => {
    const {id} = req.params;
    Goods.findById(id)
        .exec((err, goods) => {
            if (err) {
                res.json({
                    flag: false,
                    msg: err,
                })
            } else {
                res.json({
                    flag: true,
                    msg: `查询成功: ${id}`,
                    data: goods,
                })
            }
        })
}