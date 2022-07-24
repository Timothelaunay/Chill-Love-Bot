const { MessageEmbed } = require('discord.js');
module.exports.run = async (bot,message,args) => {
  message.delete();
  if (!message.member.permissions.has('MANAGE_GUILD')) return message.channel.send('Vous ne disposez pas des permissions requises !');

  const channelTarget = message.mentions.channels.first() || message.channel;
  const  deletechannelembed = new MessageEmbed()
  .setColor('#ff0000')
  .addField('Salon Supprimé : ', channelTarget)
  .setTimestamp();
  await message.channel.send(deletechannelembed);
  channelTarget.delete();
  
};

module.exports.get = {
  name: 'dc'
};