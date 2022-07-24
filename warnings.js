const db = require("quick.db");
const { MessageEmbed } = require("discord.js");
module.exports.run = (bot, message, args) => {
   message.delete();
   
   if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`Vous n'avez pas de permissions pour bannir quelqu'un`);
    const user = message.mentions.members.first();
    if (!user) return message.channel.send("Merci de mentionner un membre");
    const u = args[0];
    if (!u) return message.channel.send("warnings <@user>");
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

    if (warnings === null) warnings = 0;
  if(message.mentions.users.first().bot) {

      return message.channel.send("Je ne peux pas warn mets frères (bots)! mais tu es vraiment con -_-")

    }
  if(user.id === message.guild.owner.id) {

      return message.channel.send("Espèce de con, comment tu peux avertir le propriétaire du serveur -_-")

    }

  
  
    message.channel.send(new MessageEmbed()
        .setTitle("MODERATION WARN")
        .setDescription(`Membre:\n${user}\n à reçu un avertissement : \n Avertissement:\`\`\`\n${warnings}\n\`\`\``)
        .setColor("RED"));
};

module.exports.get = {
  name: 'warnings'
};