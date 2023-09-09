import express from "express";
import { readMessages } from "../controllers/messagesController.js";

const router = express.Router();

const formatCustomDate = (date) => {
    return `${date.toString()}`;
};

router.get("/", async (req, res) => {
    try {
        const messages = await readMessages();

        const formattedMessages = messages.map((message) => ({
            ...message.toObject(),
            added: formatCustomDate(message.added),
        }));

        res.render("index", {
            title: "Mini Messageboard",
            messages: formattedMessages.reverse(),
        });
    } catch (err) {
        res.status(500).send("Error reading messages");
    }
});

export default router;
