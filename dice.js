const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete();
        const roll1= ["1", "2","3","4","5","6"];
        const die = roll1[Math.floor(Math.random() * roll1.length)];

        let embed = new MessageEmbed()
        .setTitle('Roll')
        .setDescription(` vous avez fait un ${die} `)
        .setTimestamp()
        .setColor('#ff0000')
        message.channel.send(embed)
};

module.exports.get = {
  name: 'dice'
};