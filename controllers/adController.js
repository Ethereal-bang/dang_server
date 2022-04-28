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
                    data: {
                        count: adList.length,
                        list: adList,
                    },
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
                    msg: `查询成功${pos}`,
                    data: {
                        count: adList.length,
                        list: adList,
                    },
                })
            }
        })
}

exports._add = (req, res, next) => {
    const {name, position, img, link} = req.query;
    Ad.create({
        name,
        position,
        img,
        link,
    })
    .then(ad => {
        res.send(`添加成功：${ad}`);
    })
}