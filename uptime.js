const { MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => { 
  message.delete();
    let seconds = Math.floor(bot.uptime / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    seconds %= 60;
    minutes %= 60;
    hours %= 24;

    const embed  = new MessageEmbed()
    .setColor('#ff000')
    .setTitle(`📈 **Tu es en ligne depuis : **\n\`${days} jours\n${hours} heures\n${minutes} minutes\n${seconds} secondes\``);
    return message.channel.send(embed);
};

module.exports.get = {
  name: 'uptime'
};