import { Router } from 'express';
import WebhookRepository from '../repository/WebhookRepository.js';
const router = Router();

// ========== REGISTER WEBHOOK =========
router.post('/register/webhook', async (req, res) => {
    const body = req.body;

    try {
        res.json(await WebhookRepository.insertWebhook(body))
    } catch (error) {
        res.json({ msg: "Something went wrong in /register/webhook " + error });
    }

})

// ========== GET WEBHOOK =========
router.post('/get/webhook', async (req, res) => {
    try {
        const data = await WebhookRepository.getOneWebhook(req.body);

        if(data.object == null){
            throw new Error('data is null');
        }

        res.json(data)
    } catch (error) {
        res.json({ msg: "Something went wrong in /get/webhook " + error });
    }
});

export default router