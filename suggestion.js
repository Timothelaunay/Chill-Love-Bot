const { MessageEmbed } = require ('discord.js');

module.exports.run = async (bot, message, args) => {
      const channel = message.guild.channels.cache.find(c => c.id === '987661558815543296');
      if(!channel) return message.channel.send('Salon suggestion inexistant!');

      let messageArgs = args.join(' ');
      const embed = new MessageEmbed()
      .setColor('#FF0000')
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(messageArgs);

      channel.send(embed).then((msg) =>{
          msg.react('👍');
          msg.react('✋');
          msg.react('👎');
          message.delete();
      }).catch((err)=>{
          throw err;
      });
};

module.exports.get = {
  name: 'suggestion'
};