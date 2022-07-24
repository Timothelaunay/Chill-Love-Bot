const { MessageEmbed } = require ('discord.js');

module.exports.run = async (bot, message, args) => {
  let user = await bot.users.fetch(args[0]);
  if (!user) return message.reply("L'utilisateur n'existe pas.");
  message.guild.members.unban(user);

  const embed = new MessageEmbed()
  .setAuthor(`${user.username} (${user.id})`, user.avatarURL())
  .setColor('#ff0000')
  .setDescription('**Action**: unban')
  .setTimestamp()
  .setFooter(message.author.username, message.author.avatarURL());
  message.channel.send(embed);

};

module.exports.get = {
  name: 'unban'
};