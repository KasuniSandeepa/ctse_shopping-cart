const express = require("express");
const router = express.Router();
const controller = require("../controllers/order.controller");

module.exports = function(){
    router.get("/", controller.getAllOrders);
    router.post("/create", controller.createOrder);
  //  router.post("/calculate", controller.calculateTotalCost);

    return router;
}