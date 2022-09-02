What's the project?
=====================

The project is a pooc(proof of concept) I'm testing how to get message receive to the what'sapp using venom-bot and notify webhook third applications interesing on message.

How to work the flow:
======================

- Bot what'sapp receive message
- After bot receive the message his publish message in queue using bulljs + redis
- The script handlersMessageQueue.js receive new message and process the message. In this case get message and make http request POST with request body with message receive what'sapp notify third application.


Instructions run application:
==============================

- Clone project
- Execute **npm install** to install modules necessaries to project run
- Execute **docker-compose uç -d** to create container running redis
- Execute **npm run start:bot** to starting bot. OBS: Waiting a little bit and terminal you can see qrcode scan using whatsapp and after your bot what'sapp start.

- Execute **npm run start:handlers** to initialize script that listen queue and when receive message notify third application using webhook

Technologies:
==============

- Node.js
- Javascript
- Docker
- Redis
