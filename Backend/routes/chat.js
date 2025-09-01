import express from "express";
import chatWithBot from "../controllers/chatController.js"; // 👈 require hata diya, import use kiya + .js extension lagaya

const router = express.Router();

// POST -> /api/chat
router.post("/", chatWithBot);

export default router;
