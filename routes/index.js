const router = require('express').Router()
const EcommerceStore = require('../utils/ecommerce_store')

let Store = new EcommerceStore()
const CustomerSession = new Map()

const WhatsappCloudAPI = require('whatsappcloudapi_wrapper')
const Whatsapp = new WhatsappCloudAPI({
  accessToken: process.env.Meta_WA_accessToken,
  senderPhoneNumberId: process.env.Meta_WA_SenderPhoneNumberId,
  WABA_ID: process.env.Meta_WA_wabaId,
})

router.route('/meta_wa_callbackurl')
  .get((req, res) => {
    try {
      console.log('GET: Someone is pinging me!');
      let mode = req.query['hub.mode']
      let token = req.query['hub.verify_token']
      let challenge = req.query['hub.challenge']
      if (mode && token && mode === 'subscribe' && process.env.Meta_WA_VerifyToken === token) {
        return res.status(200).send(challenge)
      } else {
        return res.sendStatus(403)
      }
    } catch (error) {
      console.error({ error });
      return res.sendStatus(500)
    }
  })
  .post((req, res) => {
    try {
      console.log('POST: Someone is pinging me!');

      let data = Whatsapp.parseMessage(req.body)
      if (data?.isMessage) {
        let incomingMessage = data.message;
        let recipientPhone = incomingMessage.from.phone; // extract the phone number of sender
        let recipientName = incomingMessage.from.name;
        let typeOfMsg = incomingMessage.type; // extract the type of message (some are text, others are images, others are responses to buttons etc...)
        let message_id = incomingMessage.message_id;
      }

      return res.sendStatus(200)
    } catch (error) {
      console.error({ error });
      return res.sendStatus(500)
    }
  })

module.exports = router

