import mongoose from "mongoose";

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    user: { type: String, required: true, minLength: 1, maxLength: 255 },
    text: { type: String, required: true, minLength: 1, maxLength: 2000 },
    added: { type: Date, default: Date.now },
});

const Message = mongoose.model("Message", MessageSchema);

export default Message;
