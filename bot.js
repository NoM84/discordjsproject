const {Client, GatewayIntentBits, messageLink} = require('discord.js');
require('dotenv/config');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});
 

client.on('ready',() =>{
    console.log("Merhaba Diyor!");
});

client.on('messageCreate',message =>{
    if(message.content == 'ping'){
        message.reply("pong!")
    }
    if(message.content == "adamsın"){
        message.reply("EYw Cigerim")
    }
    if(message.content == "!sil"){
        message.channel.bulkDelete(10)
    }



})



























































client.login(process.env.TOKEN)