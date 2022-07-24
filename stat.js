const { MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args, level) => {
  message.delete();
  if (!message.member.permissions.has('MANAGE_GUILD')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande !");

let servers_count = message.bot.guilds.cache.size;
var myarray = [];
message.bot.guilds.cache.keyArray().forEach(async function(item, index) {

let guildMember = message.bot.guilds.cache.get(item).memberCount;
myarray.push(guildMember)
})
let sum = myarray.reduce(function (a, b) {
return a + b
});

let totalSeconds = message.bot.uptime / 1000;
let days = Math.floor(totalSeconds / 86400);
totalSeconds %= 86400;
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.floor(totalSeconds % 60);

let uptime = `\`\`\`${days} Jours\n${hours} heures\n${minutes} minutes \n${seconds} secondes\`\`\``;

let embed = new MessageEmbed()

.setTitle(`**[Support Server]**`)
  .setDescription(`Hey je suis **${message.bot.user.username}** et mon travail est un mode amusant, etc.`)

  .setTitle(`${message.bot.user.username} Stats`)
  .addFields(
    { name: "Serveurs :", value: `\`\`\`${servers_count}\`\`\``, inline: true },
    { name: "Utilisateurs :", value: `\`\`\`${sum}\`\`\``, inline: true },
    { name: "Channels :",value: `\`\`\`${message.bot.channels.cache.size}\`\`\``, inline: true },
    { name: "Uptime : ", value: uptime , inline: true },
    { name: "Ping :",value: `\`\`\`${Math.round(message.bot.ws.ping)} ms\`\`\``, inline: true },
    { name: "RAM :", value: `\`\`\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\`\`\``, inline: true  },
    { name: "Propriétaire :",value: `\`\`\`Tim\`\`\``}
  )
  .setColor("3498DB")
  .setFooter("Merci d'avoir fait la commande")  

return message.channel.send(embed);
    return message.react("<:astroz_correct:825597747800309770>");

};

module.exports.get = {
  name: 'stat'
}