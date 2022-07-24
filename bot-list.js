const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete();

        let bots = message.guild.members.cache.filter(m => m.user.bot).size;
        let noms = message.guild.members.cache.filter(m => m.user.bot).map(m => `${m.user.tag}: ${m.user.id}`).join("\n");    
        var embed = new MessageEmbed()
        .setColor('#ff0000')
        .setTitle(`Liste des Bots (${bots})`)
        .setDescription(noms)
        .setFooter(bot.user.username, bot.user.displayAvatarURL({dynamic : true }))
        message.channel.send(embed);
};

module.exports.get = {
  name : 'bot-list'
};