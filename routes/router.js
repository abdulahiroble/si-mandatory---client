import { Router } from 'express'
import WebhookRepository from '../repository/WebhookRepository.js'
const router = Router()

router.post('/register/webhook', async (req, res) => {
    const body = req.body

    try {
        res.json(await WebhookRepository.insertWebhook(body))
    } catch (error) {
        res.json({ msg: "Something went wrong in /register/webhook " + error })
    }

})

router.post('/get/webhook', async (req, res) => {

    console.log(await WebhookRepository.getOneWebhook(req.body))

    try {
        res.json(await WebhookRepository.getOneWebhook(req.body))
    } catch (error) {
        res.json({ msg: "Something went wrong in /get/webhook " + error })
    }
})

export default router