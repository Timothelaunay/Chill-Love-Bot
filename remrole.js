const { MessageEmbed } = require('discord.js')

module.exports.run = async (bot, message, args) => {
    message.delete();
    let target = message.mentions.members.first();
    
    if(!target) return message.reply(`Je ne trouve pas l'utilisateur`)
    
    let rrole = message.mentions.roles.first();
    
    if(!rrole) return message.reply(`Je ne trouve pas le rôle`)
    
    let ticon = target.user.avatarURL({ dynamic: true, size: 2048 });
    let aicon = message.author.avatarURL({ dynamic: true, size: 2048 });
    
      const embed = new MessageEmbed()
      .setAuthor(target.user.username, ticon)
      .setThumbnail(target.user.displayAvatarURL({ dynamic: true }))
      .setColor("#ff0000")
      .setDescription(`Le rôle ${rrole} à était retirer à ${target}`)
      .setFooter(`Rôle enlever à ${message.author.username}`, aicon)
      .setTimestamp()
      
      message.channel.send(embed)
      
      target.roles.remove(rrole)
};

module.exports.get = {
  name:'remrole'
};