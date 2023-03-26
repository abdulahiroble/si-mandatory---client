import mongoose from "mongoose"

const WebhookSetting = mongoose.model(
    "WebhookSetting",
    new mongoose.Schema({
        url: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    })
)

export default WebhookSetting;