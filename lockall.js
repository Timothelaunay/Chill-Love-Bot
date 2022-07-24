const { MessageEmbed } = require("discord.js");
module.exports.run =  async (bot, message) => {
message.delete();
if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande !");
let embed = new MessageEmbed()
.setTitle("TOUS LES CHANNELS SONT VEROUILLER")
.setColor('#ff0000')
message.channel.send(embed);


message.guild.channels.cache.filter(channel => channel.name).forEach(async channel => {
    channel.updateOverwrite(message.guild.id,{
SEND_MESSAGES : false
    });
});
};

module.exports.get = {
  name: 'lockall'
};