import express from "express";
import { writeMessages } from "../controllers/messagesController.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.render("form", { title: "Mini Messageboard", added: new Date() });
});

router.post("/", async (req, res) => {
    const { user, text, added } = req.body;
    const newObj = { user, text, added };

    try {
        await writeMessages(newObj);
    } catch (err) {
        console.error("Error processing form submission:", err);
    }

    res.redirect("/");
});

export default router;
