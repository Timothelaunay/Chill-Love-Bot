let config = require("../../config.json")
const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete();
    if (!message.guild.me.hasPermission("ADMINISTRATOR")) return message.reply(`Vous n'avez pas la permission requise \`ADMINISTRATOR\``);

    message.guild.fetchBans()
    .then(bans => {
      const obj = bans.map(c => ({
        user: `${c.user.id}: ${c.user.username},`
      }));
      const bList = Array.from(obj);
      if (bList.length < 1) return message.channel.send(`Il n'y a aucun utilisateur banni sur **${message.guild.name}**.`);
      let index = 0;

      const embed = new MessageEmbed()
          .setTitle(`Liste des \`membres ban\` de *${message.guild.name}* (**${++index}**) `)
          .setDescription(`${bList.map(bl => `\`\`\`\n${bl.user}\`\`\``).join("")}`)
          .setFooter(bot.user.username, config.image)
          .setTimestamp()  
          .setColor('#ff0000')
     
          message.channel.send(embed)
    });
};
  module.exports.help = {
    name: "ban-list"
};


