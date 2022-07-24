const {MessageEmbed} = require('discord.js');
module.exports.run = async (bot, message, args) => {
  message.delete();
  if (!message.member.permissions.has('MANAGE_GUILD')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande !");
    const roles = message.guild.roles.cache;
    const permissions = ["MANAGE_CHANNELS", "ADMINISTRATOR", "MANAGE_GUILD", "MANAGE_ROLES", "KICK_MEMBERS", "BAN_MEMBERS", "MANAGE_WEBHOOKS"];
    roles.forEach(role => {
      if (!role.editable) return;
      const filtered = role.permissions.toArray().filter(p => !permissions.includes(p))
      role.setPermissions(filtered);
    })
    const embed = new MessageEmbed()
    .setColor('#ff0000')
    .addField(`Désactivation des permissions..`, `\`❌\` Les permissions ont bien été désactivés !`)
    .setTimestamp();
    message.channel.send(embed);
};

module.exports.get = {
    name: "remall-perm"
};