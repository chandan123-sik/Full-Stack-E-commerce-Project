import express from "express";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";
import {placeOrder,placeOrderStripe,placeOrderRazorpay,allOrders,UserOrders,updateStatus, verifyStripe} from "../controllers/orderController.js";

const orderRouter = express.Router();

// Admin Features-
orderRouter.post("/list",adminAuth,allOrders);
orderRouter.post("/status",adminAuth,updateStatus);

// Payment Features-
orderRouter.post("/place",authUser,placeOrder);
orderRouter.post("/stripe",authUser,placeOrderStripe);
orderRouter.post("/razorpay",authUser,placeOrderRazorpay);

// User Feature-
orderRouter.post("/userorders",authUser,UserOrders);

// verify payment-
orderRouter.post("/verifyStripe",authUser,verifyStripe)

export default orderRouter;