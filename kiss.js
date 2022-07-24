const { MessageEmbed } = require("discord.js");
const { purple_medium } = require("../../colors.json");


module.exports.run = async(bot, message, args) => {
    message.delete();
    let mentioned = message.mentions.members.first() || message.author
    var options = [
        "https://media.giphy.com/media/12VXIxKaIEarL2/giphy.gif",
        "https://media.giphy.com/media/zkppEMFvRX5FC/giphy.gif",
        "https://media.giphy.com/media/hnNyVPIXgLdle/giphy.gif",
        "https://media.giphy.com/media/pcui5ohH3X96M/giphy.gif",
        "https://media.giphy.com/media/lBGj9wHG59Xr2/giphy.gif",
        "https://media.giphy.com/media/G3va31oEEnIkM/giphy.gif",
        "https://media.giphy.com/media/zkppEMFvRX5FC/giphy.gif",
        "https://media.giphy.com/media/flmwfIpFVrSKI/giphy.gif",
        "https://media.giphy.com/media/l4FsKa1n9fyStiwZW/giphy.gif",
        "https://media.giphy.com/media/1OrOsLiYJcMdG/giphy.gif",
        "https://media.giphy.com/media/l4FsxDD7LwInTgy5O/giphy.gif",
        "https://media.giphy.com/media/EVODaJHSXZGta/giphy.gif",
        "https://media.giphy.com/media/7z1xs4Fl9Kb8A/giphy.gif",
    ];
    var response = options[Math.floor(Math.random() * options.length)];


    const kiss = new MessageEmbed()
        .setDescription(`${mentioned} Tu as été embrasser par ${message.author}`)
        .setColor(purple_medium)
        .setImage(`${response}`)
    message.channel.send(kiss);
};

module.exports.get = {
    name: 'kiss'
};