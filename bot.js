const { channel } = require('diagnostics_channel');
const {Client, MessageAttachment,MessageEmbed, GatewayIntentBits, messageLink} = require('discord.js');
require('dotenv/config');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildVoiceStates
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
        message.react("🇬")
        message.react('🇹')
        message.react("🇪")
        message.react("🇳")
    }
    if((message.content == "billurunu kemireyim")||(message.content == "Billurunu kemireyim")){
        message.reply("Olur")
    }
    if(message.content.toLowerCase() == 'sa'){
        message.react("🇦")
        message.react("🇸")
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
    if((message.content == "Naber aga")||(message.content == "Naber Aga")||(message.content == "naber aga")||(message.content == "naber Aga")){
        message.reply(`İyiyim Senden naber ${message.member.displayName}`)
    }
    if((message.content.includes("sik"))){
        message.reply("Lütfen Küfür etmeyelim")
    }
    if(message.content.toLowerCase() == "aga"){
        message.reply("Efendim")
    }
    if(message.content.toLowerCase() == "biraz nostalji göster"){
        message.reply("Tamam")
        message.channel.send({ files: ['https://i.hizliresim.com/f8k08tw.jpg']}) //1
        message.channel.send({ files: ['https://i.hizliresim.com/qowv0x8.jpg']}) //2
        message.channel.send({ files: ['https://i.hizliresim.com/fic02bc.jpg']}) //3
        message.channel.send({ files: ['https://i.hizliresim.com/3ea6wpc.jpg']}) //4
        message.channel.send({ files: ['https://i.hizliresim.com/hvt4rkz.jpg']}) //5
        message.channel.send({ files: ['https://i.hizliresim.com/cz2c8p2.jpg']}) //6
        message.channel.send({ files: ['https://i.hizliresim.com/9w5dnre.jpg']}) //7
    }
    








})





























































client.login(process.env.TOKEN)