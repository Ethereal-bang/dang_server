const ShoppingCart = require("../models/shoppingCart");
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

exports.register = (req, res, next) => {
    const {tel, password} = req.query;
    User.findOne({tel})
        .exec((err, ret) => {
            if (ret) {
                res.json({
                    flag: false,
                    msg: "用户已存在",
                })
            } else {
                ShoppingCart.create({})   // 新建一购物车与该用户对应
                    .then(ret => {
                        User.create({
                            tel,
                            password,
                            shoppingCart: ret._id,   // 购物车id
                        })
                            .then(user => {
                                res.json({
                                    flag: true,
                                    data: {
                                        user,
                                    },
                                    msg: "注册成功"
                                })
                            })
        
                    })
            }
        })
}

exports.login = (req, res, next) => {
    const {tel, password} = req.query;
    User.findOne({"tel": tel})
        .populate("shoppingCart")
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
                            data: {
                                user: {
                                    tel,
                                    shoppingCartId: result.shoppingCart._id,    
                                },
                            },
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

