const venom = require('venom-bot');
const Queue = require('bull')

const messageQueue = new Queue("messages")
const mediaMessageQueue = new Queue("media_messages")

venom
    .create({
        session: 'session-name',
        multidevice: true 
    })
    .then((client) => start(client))
    .catch((erro) => {
        console.log(erro);
    });

function start(client) {
    client.onMessage(async (message) => {
        if (message.isMedia === true || message.isMMS === true) {
            const buffer = await client.decryptFile(message);
            message.base64Media = buffer.toString('base64')
            mediaMessageQueue.add(message, { attempts: 3 })
            return;
        }

        if (message.isGroupMsg === false) {
            messageQueue.add(message, { attempts: 3 })
        }
    });

}