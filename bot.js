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
    client.user.setActivity(`Age of History II`, { tpye: "STREAMING"})
});

var kontrol = 0;
let kanalid = "787718450206343221";
















client.on('messageCreate',message =>{
    if(message.author.bot) return;
    if((message.content.toLowerCase() == "agamod aç")&&(message.author.id == '718497288963620904')) {
        kontrol = 1;
        message.reply("Aga mod Açıldı")
    }
    if((message.content.toLowerCase() == "agamod kapa")&&(message.author.id == '718497288963620904')) {
        kontrol =0;
        message.reply("Aga Mod Kapandı")
    }
    
    if(kontrol == 0) {
        if(message.content == 'ping'){
            message.reply("pong")
        }

        if(message.content.toLowerCase() == "!komutlar") {
            message.author.send("----------------------------------------------\nsa içeren her kelime");
            message.author.send("ping");
            message.author.send("!söyle (tekrar edilecek kelime)");
            message.author.send("!mesaj (kişinin etiket hali) (gönderilecek mesaj)");
        }

        if(message.content.toLowerCase().startsWith("!söyle ")) {
            let yazi = message.content.substring(7);
            message.reply(yazi);
        }
        
        if(message.content.startsWith("!mesaj ")) {
            let mesaj = message.content.substring(7);
            const startindex = mesaj.indexOf('@');
            const endindex = mesaj.indexOf('>');
            const gonderilecekid = mesaj.substring(startindex+1,endindex);
            const ham_mesaj = mesaj.substring(endindex+1);
            const kullanici = client.users.cache.get(gonderilecekid);
            kullanici.send(ham_mesaj);
        }


    }
    
    
    
    
    
    
    
    
    if(kontrol == 1) {
        if(message.content.toLowerCase() == "!komutlar") {
            message.author.send("sa içeren her kelime");
            message.author.send("çağrı (içeren her kelime)");
            message.author.send("billurunu kemireyim (=) ");
            message.author.send("hanifi (içeren her kelime)");
            message.author.send("iki tane ince içeren her kelime");
            message.author.send("naber aga (=)");
            message.author.send("aga içeren her cümle");
            message.author.send("biraz nostalji göster (=)");

        }

        if(message.content.toLowerCase().includes("çağrı")){
            message.react("🇬")
            message.react('🇹')
            message.react("🇪")
            message.react("🇳")
        }

        if(message.content.toLowerCase() == "billurunu kemireyim"){
            message.react("🇴")
            message.react("🇱")
            message.react("🇺")
            message.react("🇷")
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

        if(message.content.toLowerCase() == "naber aga") {
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



    }
    
    if(message.content.toLowerCase() == 'sa'){
        message.react("🇦")
        message.react("🇸")
    }

    if(message.content.toLowerCase().startsWith("!kanal ")) {
        let secim = message.content.substring(7);
        
        if (secim.toLowerCase() == "yardım") {
            message.reply("makara\nkitaplar\nders-genel\nana")
        }
        
        if (secim.toLowerCase() == "makara") {
            kanalid = '1038461948989288488';
            message.reply(`Kanal ${secim} olarak değiştirildi.`)
        }
        if(secim.toLowerCase() == "kitaplar") {
            kanalid = '1089855830637158411';
            message.reply(`Kanal ${secim} olarak değiştirildi.`)
        }
        if(secim.toLowerCase() == "ders-genel") {
            kanalid = '1038457863158386771';
            message.reply(`Kanal ${secim} olarak değiştirildi.`)
        }
        if(secim.toLowerCase() == "ana") {
            kanalid = '787718450206343221';
            message.reply(`Kanal ${secim} olarak değiştirildi.`)
            
        }
        if(secim.toLowerCase().startsWith("kod ")) {
            kanalid = secim.substring(4);
            let isim = client.channels.cache.get(kanalid).name
            message.reply(`Kanal ${isim} olarak değiştirildi.`)
        }
        return;
    }
    if(message.channel.id == '1088457124230742067') {
        client.channels.cache.get(kanalid).send(message.content);
        
    }
    








})





























































client.login(process.env.TOKEN)