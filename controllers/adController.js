const Ad = require("../models/ad");

exports.showAll = async (req, res, next) => {
    await Ad.find({})
        .exec((err, adList) => {
            if (err) {
                res.json({
                    flag: false,
                    msg: err,
                })
            } else {
                res.json({
                    flag: true,
                    msg: "查询成功",
                    data: adList,
                })
            }
        })
}

exports.getByPos = (req, res, next) => {
    const {pos} = req.params;
    Ad.find({position: pos})
        .exec((err, adList) => {
            if (err) {
                res.json({
                    flag: false,
                    msg: err,
                })
            } else {
                res.json({
                    flag: true,
                    msg: "查询成功",
                    data: adList,
                })
            }
        })
}