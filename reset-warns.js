const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
    message.delete()
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Vous ne disposez pas des permission requises pour effectuer cette commande.");
    
    const user = message.mentions.members.first();
    
    if(!user) return message.channel.send("Merci de mentionner la personne");
    
    if(message.mentions.users.first().bot) return message.channel.send("Les bots ne sont pas autorisés à recevoir des avertissements");

    if(user.id === message.guild.owner.id) return message.channel.send("Espèce de con, comment tu peux réinitialiser les avertissement sur le propriétaire du serveur -_-");

    if(message.author.id === user.id) return message.channel.send("Vous n’êtes pas autorisé à réinitialiser vos avertissements");
    
    let warnings = db.get(`warns_${message.guild.id}_${user.id}`)
    
    if(warnings === null) return message.channel.send(`${message.mentions.users.first().username} n'as aucun warns`);
    
    db.delete(`warnings_${message.guild.id}_${user.id}`)
    user.send(`Tous vos avertissements sont réinitialisés par ${message.author.username} sur ${message.guild.name}`)
    await message.channel.send(`Tous les avertissements de **${message.mentions.users.first().username}** ont était enlever`);
};

module.exports.get = {
  name: 'reset-warns'
};