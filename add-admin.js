const { MessageEmbed } = require ('discord.js');

module.exports.run = async (bot, message, args) => {
  message.delete();
  if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande !");

  const user = message.mentions.members.first();
  if (!user) return message.channel.send("Veuillez mentionner le membre à qui vous souhaitez offrir ce rôle");
  if (user.id === message.author.id) return message.channel.send("Je ne te le mettrai pas :(");

  let adminrole = message.guild.roles.cache.find(x => x.id === "989263778405298237");
  if (!adminrole) return message.channel.send("Ce serveur n'a pas de rôle avec le nom «admin»");
  if (user.roles.cache.has(adminrole)) return message.channel.send("L'utilisateur mentionner est déjà un admin");

  user.roles.add(adminrole);
  let adminembed = new MessageEmbed()
  .setColor('#ff00ff')
  .setAuthor(`Le rôle Admin viens d'être attribué`)
  .addField(`${message.author.username}`, `viens de faire passer ${user} administrateur !`)
  .setFooter(`Merci de ne pas en abusé`);
  message.channel.send(adminembed);
};

module.exports.get = {
  name: 'add-admin'
};