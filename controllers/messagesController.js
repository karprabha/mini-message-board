import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "../models/messages.json");

const readMessages = async () => {
    try {
        const data = await fs.promises.readFile(filePath, "utf8");
        return JSON.parse(data);
    } catch (err) {
        console.error("Error reading messages:", err);
        return [];
    }
};

const writeMessages = async (messages) => {
    try {
        const newData = JSON.stringify(messages);
        await fs.promises.writeFile(filePath, newData, "utf8");
        console.log("Messages saved successfully.");
    } catch (err) {
        console.error("Error writing messages:", err);
    }
};

export { readMessages, writeMessages };
