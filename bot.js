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
        message.reply("pong")
    }
    if(message.content == "!sil"){
        message.channel.bulkDelete(10)
    }
    if(message.content == "Çağrı"){
        Message.reply("tten")
    }
    if((message.content == "Sa")||(message.content == "sa")||(message.content == "SA")){
        message.reply("As")
    }
    



});





























































client.login(process.env.TOKEN)