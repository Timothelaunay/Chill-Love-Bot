const { MessageEmbed } = require("discord.js");
module.exports.run =  async (bot, message) => {
message.delete();
if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`:x: Vous n'avez pas de permissions pour bannir quelqu'un`);
let embed = new MessageEmbed()
.setTitle("TOUS LES SALONS SONT DEVEROUILLER")
.setColor('#ff0000')
message.channel.send(embed);


message.guild.channels.cache.filter(channel => channel.name).forEach(async channel => {
    channel.updateOverwrite(message.guild.id,{
SEND_MESSAGES : true
    });
});

};

module.exports.get = {
  name: 'unlockall'
};