const { MessageEmbed } = require('discord.js');

module.exports.run = async(bot, message, args) => {

    message.delete()

    let desti = message.mentions.users.first();

    const guild = message.guild.name;

    if (!message.member.hasPermission('MANAGE_MESSAGES'))
        return message.channel.send('`Vous n\'avez pas la permission d\'utiliser cette commande.`')

    if (!desti)
        return message.channel.send('→ **Veuillez mentionner la personne a dm**')

    let texte = args.join(" ").slice(22);
    if (!texte)
        return message.reply("**Veuillez indiquer un texte à envoyer**")

    const embed = new MessageEmbed()
        .setColor("gold")
        .setTitle("→ **Important**")
        .setDescription(`**le serveur ${guild} vous a contacté**`)
        .addField('\u200B', ` **${texte}**`)
        .setFooter(message.author.username, message.author.avatarURL({ dynamic: true }))

    desti.send(embed);
};
module.exports.get = {
    name: "dm"
};