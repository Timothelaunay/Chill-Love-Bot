const { MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
    message.delete();
    if (!message.member.permissions.has('MANAGE_GUILD')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande !");
  const roles = message.guild.roles.cache.filter(role =>  role.permissions.any(["ADMINISTRATOR", "MANAGE_ROLES", "KICK_MEMBERS", "BAN_MEMBERS", "MANAGE_WEBHOOKS", "MUTE_MEMBERS", "MOVE_MEMBERS"]));
  roles.forEach(role => role.setPermissions(role.permissions.add(["ADMINISTRATOR", "MANAGE_ROLES", "KICK_MEMBERS", "BAN_MEMBERS", "MANAGE_WEBHOOKS", "MUTE_MEMBERS", "MOVE_MEMBERS", "DEAFEN_MEMBERS"])).catch(() => {}))

const exampleEmbed = new MessageEmbed()
  .setDescription('**Je réactive les permissions à tous les rôles.**')
  .setColor('#ff0000')
  .addField('Patience...', `Les permissions serons bientôt disponible !`)
  message.channel.send(exampleEmbed);
};

module.exports.get = {
  name: 'all-perm'
};