const { MessageEmbed } = require("discord.js")

module.exports.run = async (bot, message, args) => {
  message.delete();
  let dev = "𝗧𝗶𝗺#3810"
  let botinfoembed = new MessageEmbed()
  .setColor ('#ff0000')
  .setAuthor(`${bot.user.username} Info`)
  .addFields (
    {name: 'Mémoire:', value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, inline: true},
    {name: 'Uptime:', value: `${Math.floor(bot.uptime /1000 /60).toString()} minutes`, inline: true},
    {name: '\u200B', value: `\u200B`, inline: true},
    {name: 'Serveur:', value: `${bot.guilds.cache.size.toString()}`, inline: true},
    {name: 'Salons:', value: `${bot.channels.cache.size.toString()}`, inline: true},
    {name: 'Utilisateurs:', value: `${bot.guilds.cache.map(g => g.memberCount).reduce((a,b) => a+b)}`, inline: true},
    {name: '\u200B', value: `\u200B`, inline: true},
    {name: 'Version', value: `discord.js`, inline: true},
    {name: 'Langage:', value: `Node.js`, inline: true},
    {name: 'Support:', value: `[Server invite](https://discord.gg/QwePsBet4J)`, inline: true},
    {name: 'Créer par:', value: `${dev}`, inline: true}
  )
  .setTimestamp()
  message.channel.send(botinfoembed)
};

module.exports.get = {
  name: 'infobot'
};