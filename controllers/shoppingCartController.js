const ShoppingCart = require("../models/shoppingCart");

exports.addGoods = async (req, res, nexxt) => {
    const {tel} = req.params;
    const {id, num} = req.query;
    const shoppingCart = ShoppingCart.findOne({tel}).exec();
    console.log(shoppingCart);
}