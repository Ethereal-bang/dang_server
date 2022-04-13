const User = require("../models/user");

exports.user_info = async (req, res, next) => {
    res.status(200);
    await User.find({ tel: req.params.tel })
        .exec((err, listInfo) => {
            if (err) {
                res.json({
                    flag: false,
                    msg: err,
                });
            } else {
                res.json({
                    flag: true,
                    data: listInfo,
                });
            }
        })
}