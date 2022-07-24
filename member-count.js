const { MessageEmbed } = require ('discord.js');

module.exports.run = async (client, message, args) => {
  message.delete();
  if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande !");
      let membercountembed = new MessageEmbed()
      .setAuthor( message.guild.name, message.guild.iconURL({dynamic: true}), "https://clan.milrato.eu")
      .setColor('#ff0000')
      .addField(" Total UTILISATEURS", "😀 \`" + message.guild.memberCount + "\`", true)
      .addField(" Total HUMAINS", "👤 \`" + message.guild.members.cache.filter(member => !member.user.bot).size + "\`", true)
      .addField(" Total BOTS", "🤖 \`" + message.guild.members.cache.filter(member => member.user.bot).size + "\`", true)
      .addField("❱ En Ligne", "🟢 \`" + message.guild.members.cache.filter(member => member.presence.status != "online").size + "\`", true)
      .addField("❱ En Ligne", "🟢 \`" + message.guild.members.cache.filter(member => !member.user.bot && member.presence.status != "online").size + "\`", true)
      .addField("❱ En Ligne", "🟢 \`" + message.guild.members.cache.filter(member => member.user.bot && member.presence.status != "online").size + "\`", true)
      .addField("❱ Inactf", "🟠 \`" + message.guild.members.cache.filter(member => member.presence.status == "idle").size + "\`", true)
      .addField("❱ Inactf", "🟠 \`" + message.guild.members.cache.filter(member => !member.user.bot && member.presence.status == "idle").size + "\`", true)
      .addField("❱ Inactf", "🟠 \`" + message.guild.members.cache.filter(member => member.user.bot && member.presence.status == "idle").size + "\`", true)
      .addField("❱ Ne pas Déranger", "🔴 \`" + message.guild.members.cache.filter(member => member.presence.status == "dnd").size + "\`", true)
      .addField("❱ Ne pas Déranger", "🔴 \`" + message.guild.members.cache.filter(member => !member.user.bot && member.presence.status == "dnd").size + "\`", true)
      .addField("❱ Ne pas Déranger", "🔴 \`" + message.guild.members.cache.filter(member => member.user.bot && member.presence.status == "dnd").size + "\`", true)
      .addField("❱ Hors Ligne", ":black_circle:\`" + message.guild.members.cache.filter(member => member.presence.status == "offline").size + "\`", true)
      .addField("❱ Hors Ligne", ":black_circle:\`" + message.guild.members.cache.filter(member => !member.user.bot && member.presence.status == "offline").size + "\`", true)
      .addField("❱ Hors Ligne", ":black_circle:\`" + message.guild.members.cache.filter(member => member.user.bot && member.presence.status == "offline").size + "\`", true)
      .setTimestamp()
      message.channel.send(membercountembed);
};

module.exports.get = {
  name: 'member-count'
};