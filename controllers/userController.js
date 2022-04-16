const User = require("../models/user");

exports.user_info = async (req, res, next) => {
    await User.find({tel: req.params.tel})
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

exports.login = async (req, res, next) => {
    const {tel, pwd} = req.params;
    await User.findOne({tel})
        .exec((error, result) => {
            if (error) {
                res.json({
                    flag: false,
                    msg: error,
                    data: true,
                });
            } else {
                if (result) {
                    if (result.pwd === pwd) {
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