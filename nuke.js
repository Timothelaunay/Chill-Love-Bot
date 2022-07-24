const { MessageEmbed } = require('discord.js');
module.exports.run = async (bot, message, args) => {
  message.delete();
        const user = message.mentions.members.first() || message.member;
        if(!message.member.permissions.has("ADMINISTRATOR")) return message.reply("Tu n'a pas la permissions d'effectuer cette commande");

        const embed = new MessageEmbed()
            .setTitle(`Le channel a été nuke par ${user.user.username}`)
            .setColor("#ff0000");

        message.channel.clone().then(channel => {
            channel.setPosition(message.channel.position);
        });
        await message.channel.send(embed)
        message.channel.delete();
};

module.exports.get = {
  name: 'nuke'
};