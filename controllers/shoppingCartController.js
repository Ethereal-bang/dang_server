const ShoppingCart = require("../models/shoppingCart");
const Goods = require("../models/goods");
const { log } = require("debug/src/browser");

exports.addGoods = async (req, res, next) => {
    const {tel} = req.params;
    let {id, num} = req.query;    // 得到的都是字符串类型
    num = parseInt(num);

    const shoppingCart = await ShoppingCart
        .findOne({tel}).populate("goodsList").exec();
    // 1.调整购物车商品总数（重复不计入)
    let flag = false;
    for (let {_id} of shoppingCart.goodsList) {
        if (_id === id) {
            flag = true;
            break;
        }
    }
    if (!flag) {
        shoppingCart.count += num;  // 只加不重复商品
    }
    // 2.添加该商品ID
    let cnt = 0;
    while (cnt < num) {   // 加num次
        shoppingCart.goodsList.push(id);
        cnt++;
    }
    // 3.调整购物车总价
    const goods = await Goods.findById(id).exec();
    shoppingCart.price += num * goods.price_now;
    // 4.更新文档
    await ShoppingCart
        .updateOne(
            {tel},
            shoppingCart)
        .exec();
    res.json({
        flag: true,
        msg: "添加成功",
        data: {
            name: goods.name,
            num,
        },
    })
}

exports.show = (req, res, next) => {
    const { shoppingCartId } = req.params;
    ShoppingCart.findById(shoppingCartId)
        .populate("goodsList")
        .exec((err, shoppingCart) => {
            console.log
            if (err) {
                res.json({
                    flag: false,
                    msg: err,
                })
            } else {
                res.json({
                    flag: true,
                    data: shoppingCart,
                })
            }
        })

}

exports.reset = async (req, res, next) => {
    const {tel} = req.params;
    await ShoppingCart.updateOne({tel}, {
        count: 0,
        price: 0,
        goodsList: [],
    }).exec()
    res.json({
        flag: true,
        msg: "清空成功",
    })
}