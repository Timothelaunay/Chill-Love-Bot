const { MessageEmbed } = require('discord.js')

module.exports.run = async(bot, message, args) => {
    message.delete();
    if (!message.member.hasPermission("BAN_MEMBERS")) {
        return message.channel.send(`**${message.author.username}**, Vous n'avez pas de permissions pour bannir quelqu'un`)
    }

    if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
        return message.channel.send(`**${message.author.username}**,Je n'ai pas les permisssions pour bannir quelqu'un`)
    }

    const logchannel = message.guild.channels.cache.get('998582761382219867');
    const target = message.mentions.members.first();

    if (!target) {
        return message.channel.send(`**${message.author.username}**, Veuillez mentionner la personne que vous souhaitez bannir.`)
    }

    if (target.id === message.author.id) {
        return message.channel.send(`**${message.author.username}**, Vous ne pouvez pas vous bannir !`)
    }
    let reason = args[1]
    if (!reason) reason = 'Aucune raison fournie';

    let embed = new MessageEmbed()
        .setTitle("→ Ban")
        .setDescription(`L'utilisateur  ${target} (${target.id}) à bien était banni`)
        .setColor("#ff2050")
        .setThumbnail(target.avatarURL)
        .setFooter(` par ${message.author.tag}`);

    logchannel.send(embed);
    target.ban({ reason: reason });

    let mpembed = new MessageEmbed()
        .setTitle('→ Sanction')
        .setDescription(`**Vous avez été banni de ${message.guild.name} **`)
        .addField(`Raison :`, ` ${reason}`)
        .setFooter(`Sanction par ${message.author.tag}`);

    target.send(mpembed);


};


module.exports.get = {
    name: "ban"
};