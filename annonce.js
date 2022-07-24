const { MessageEmbed } = require ('discord.js');

module.exports.run = async (bot, message, args) => {
  message.delete();

  const annonce_channel = message.guild.channels.cache.find(c => c.id === '987047049511968861');
    if(!annonce_channel) return message.channel.send('Salon annonce inexistant!');

    let messageArgs = args.join(' ');
      const embed = new MessageEmbed()
      .setColor('#FF0000')
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(messageArgs);

      annonce_channel.send(embed)
};

module.exports.get = {name: 'annonce'};