import WebhookSetting from "../model/WebhookSetting.js";

class WebhookRepository {
    insertWebhook = async (body) => {

        const webhookSetting = new WebhookSetting({
            url: body.webhookUrl,
            name: body.name
        });

        try {
            const webhookSettingSaved = await webhookSetting.save();
            return {
                success: true,
                object: webhookSettingSaved
            }
        } catch (e) {
            console.log("OOPS, something went wrong in insertWebhookSetting" + e)
            return {
                success: false,
                object: {},
                msg: "OOPS, something went wrong in insertWebhookSetting" + e,
                status: 405
            }
        }
    }
    getOneWebhook = async (body) => {
        try {
            const data = await WebhookSetting.findOne({ name: body.name });

            return {
                object: data,
                success: true,
                msg: ""
            }
        }
        catch (error) {
            return {
                success: false,
                Object: {},
                msg: "OOPS, something went wrong validateUser" + error,
                status: 405
            }
        }
    }
}

export default new WebhookRepository;