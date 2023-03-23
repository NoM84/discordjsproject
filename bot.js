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
    client.user.setPresence({
        status: "online",
        activity: {
            name: "Deneme 1 2 3",
            type: "PLAYING"
        }
    });
});

client.on('messageCreate',message =>{
    if(message.content == 'ping'){
        message.reply("pong")
    }
    if(message.content == "Çağrı"){
        message.reply("tten")
    }
    if((message.content == "Sa")||(message.content == "sa")||(message.content == "SA")){
        message.reply("As")
    }
    



});





























































client.login(process.env.TOKEN)