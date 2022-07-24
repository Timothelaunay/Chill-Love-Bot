const { MessageEmbed } = require('discord.js')

module.exports.run = async (bot, message, args) => {
    message.delete();
    
    let target = message.mentions.members.first();
    
    if(!target) return message.reply(`Je ne trouve pas l'utilisateur`);
    
    let rrole = message.mentions.roles.first();
    
    if(!rrole) return message.reply(`Je ne trouve pas le rôle`);
    
      
      target.roles.add(rrole)
};

module.exports.get = {
  name:'add-role'
};