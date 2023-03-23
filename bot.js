const { channel } = require('diagnostics_channel');
const {Client, MessageAttachment,MessageEmbed, GatewayIntentBits, messageLink} = require('discord.js');
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
    client.user.setActivity(`Abd ye selamlar`, { tpye: "STREAMING"})
})

client.on('messageCreate',message =>{
    if(message.content == 'ping'){
        message.reply("pong")
    }
    if(message.content =="ehehe"){
        message.reply("Hahaha")
    }
    if((message.content.includes("Çağrı"))||(message.content.includes("çağrı"))){
        message.reply("tten")
    }
    if((message.content == "billurunu kemireyim")||(message.content == "Billurunu kemireyim")){
        message.reply("Olur")
    }
    if((message.content == "Sa")||(message.content == "sa")||(message.content == "SA")){
        message.reply("As")
    }
    if((message.content.includes("hanifi"))||(message.content.includes("Hanifi"))){
        message.reply("....");
        message.channel.send({ files: ['https://i.hizliresim.com/aa7j6a4.png']})
    }
    if((message.content.includes("ince"))||(message.content.includes("İnce"))){
        let kelimesayisi = (message.content.match(new RegExp("İnce","g")) || []).length
        let kelimesayisi2 = (message.content.match(new RegExp("ince","g")) || []).length
        if ((kelimesayisi==2)||(kelimesayisi2==2)||((kelimesayisi==1)&&(kelimesayisi2==1))){
            message.channel.send({ files: ['https://i.hizliresim.com/jhystk8.jpg']})
        }
    }
    



});





























































client.login(process.env.TOKEN)