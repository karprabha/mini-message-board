import express from "express";
import {
    readMessages,
    writeMessages,
} from "../controllers/messagesController.js";

const router = express.Router();

router.get("/", (req, res) => {
    const timestamp = new Date().toISOString();
    const dateObj = new Date(timestamp);
    const formattedDate = dateObj.toString();

    res.render("form", { added: formattedDate });
});

router.post("/", async (req, res) => {
    const { user, text, added } = req.body;
    const newObj = { user, text, added };

    try {
        const messages = await readMessages();
        messages.push(newObj);
        await writeMessages(messages);
    } catch (err) {
        console.error("Error processing form submission:", err);
    }

    res.redirect("/");
});

export default router;
