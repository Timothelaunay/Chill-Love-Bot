const Discord = require("discord.js")
module.exports.run = async(bot, message, args) => {

    let embedsupport = new Discord.MessageEmbed()
        .setTitle("Un soucis ?")
        .addField("Tu peux rejoindre le support du bot a l'invitation : https://discord.gg/QwePsBet4J")
        .setImage("https://media.giphy.com/media/Cs7S2Pl1LvKhAhocFI/giphy.gif")
        .setColor(0xBBA2F7)
        .setFooter('Développer par ! 𝗧𝗶𝗺#3810')
    message.channel.send(embedsupport);

};

module.exports.get = {
    name: 'support'
};