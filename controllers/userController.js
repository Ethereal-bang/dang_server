const User = require("../models/user");

exports._showAll = async (req, res, next) => {
    await User.find({})
        .exec((err, resList) => {
            if (err) {
                res.send(err)
            } else {
                res.send(resList)
            }
        })
}

exports.user_info = async (req, res, next) => {
    await User.find({"tel": req.params.tel})
        .exec((err, listInfo) => {
            if (err) {
                res.json({
                    flag: false,
                    msg: err,
                    data: [],
                });
            } else {
                res.json({
                    flag: true,
                    msg: "Success",
                    data: listInfo,
                });
            }
        })
}

exports.register = async (req, res, next) => {
    const {tel, password} = req.query;
    await User.findOne({tel})
        .exec((err, ret) => {
            if (ret) {
                res.json({
                    flag: false,
                    msg: "用户已存在",
                })
            } else {
                User.create({
                    tel,
                    password,
                })
                    .then(user => {
                        res.json({
                            flag: true,
                            data: user,
                            msg: "注册成功"
                        })
                    })
            }
        })
}

exports.login = async (req, res, next) => {
    const {tel, password} = req.query;
    console.log(tel)
    await User.findOne({"tel": tel})
        .exec((error, result) => {
            if (error) {
                res.json({
                    flag: false,
                    msg: error,
                    data: true,
                });
            } else {
                if (result) {
                    if (result.password === password) {
                        res.json({
                            flag: true,
                            msg: "登录成功",
                            data: true,
                        });
                    } else {
                        res.json({
                            flag: false,
                            msg: "密码错误",
                        });
                    }
                } else {
                    res.json({
                        flag: false,
                        msg: "用户不存在",
                    });
                }
            }
        })
}