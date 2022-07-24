const Discord = require('discord.js');
module.exports.run = async (bot, message, args) =>{ 
  message.delete();
    if (!message.guild.me.hasPermission(["ADMINISTRATOR"])) return message.channel.send("Vous n'avez pas les permission requises pour effectuer cette commande ");
    let mention = message.mentions.members.first()
    if (!mention) return message.channel.send(`Merci de mentionner la personne à kick du vocal `);

    mention.voice.kick();
    return message.channel.send(`${mention} à bien était kick du vocal !`);
  
};

module.exports.get = {
  name: 'voice-kick'
};