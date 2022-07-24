const { MessageEmbed } = require("discord.js")
const { purple_medium } = require("../../colors.json");


module.exports.run = async(bot, message, args) => {
    message.delete();
    var options = [

        "https://media.giphy.com/media/4ilFRqgbzbx4c/giphy.gif",
        "https://media.giphy.com/media/xdgisqRDFyO9G/giphy.gif",
        "https://media.giphy.com/media/lgTpcy4dkdUc0/giphy.gif",
        "https://media.giphy.com/media/9dhgKatYHfEuA/giphy.gif",
        "https://media.giphy.com/media/NRPFpSPJbve80/giphy.gif",
        "https://media.giphy.com/media/Ejw31fJJkDfQ4/giphy.gif",
        "https://media.giphy.com/media/3XUbDJ3rPBK1y/giphy.gif",
        "https://media.giphy.com/media/y7IQJbLegexig/giphy.gif",
        "https://media.giphy.com/media/zchxJKoZRSz1S/giphy.gif",
        "https://media.giphy.com/media/csWLak8DhBB95oFiWx/giphy.gif",
        "https://media.giphy.com/media/MI9vTrc4TUvII/giphy.gif"

    ];

    var response = options[Math.floor(Math.random() * options.length)];
    const kiss = new MessageEmbed()
        .setDescription(`${message.author} Fume tranquillement`)
        .setColor(purple_medium)
        .setImage(`${response}`)
    message.channel.send(kiss);
}

module.exports.get = {
    name: 'fume'
}