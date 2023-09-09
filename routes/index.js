import express from "express";
import { readMessages } from "../controllers/messagesController.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const messages = await readMessages();
        res.render("index", {
            title: "Mini Messageboard",
            messages: messages.reverse(),
        });
    } catch (err) {
        res.status(500).send("Error reading messages");
    }
});

export default router;
