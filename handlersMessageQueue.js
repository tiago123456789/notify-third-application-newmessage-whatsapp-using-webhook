const { default: axios } = require('axios');
const Queue = require('bull')
const webhook = require("./webhook.json")

const messageQueue = new Queue("messages")
const mediaMessageQueue = new Queue("media_messages")

messageQueue.process(async (job, done) => {
    await axios.post(webhook.NEW_MESSAGE, job.data)
    console.log("PROCESSED NEW MESSAGE")
    done();
})

mediaMessageQueue.process(async (job, done) => {
    await axios.post(webhook.NEW_MEDIA_MESSAGE, job.data)
    console.log("PROCESSED NEW MEDIA MESSAGE")
    done();
})

console.log(">>>>> Started handlers <<<<<<")