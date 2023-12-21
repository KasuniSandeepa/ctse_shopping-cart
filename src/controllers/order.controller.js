const mongoose = require("mongoose");
const Order = require('../models/order.model');


const createOrder = async (req,res) => {
    if(req.body){
        const order = new Order(req.body);
        await order.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            })
       // console.log(req.body.selectedCategories);
    }
}

// const getAllOrders= async (req,res) => {
//     await Room.find({}).populate('categories','name description')
//         .then(data => {
//             res.status(200).send({ data: data });
//         })
//         .catch(error => {
//             res.status(500).send({ error: error.message });
//             console.log("kasuni");
//         })
// }

const getAllOrders = async (req,res) => {
    await Order.find({})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        })
}



module.exports = {
    createOrder,
    getAllOrders
}