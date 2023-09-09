import Message from "../models/message.js";

const readMessages = async () => {
    try {
        return await Message.find().exec();
    } catch (err) {
        console.error("Error reading messages:", err);
        return [];
    }
};

const writeMessages = async (newObj) => {
    try {
        const newMessage = new Message(newObj);
        await newMessage.save();
        console.log("Messages saved successfully.");
    } catch (err) {
        console.error("Error writing messages:", err);
    }
};

export { readMessages, writeMessages };
