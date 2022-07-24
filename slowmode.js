const { MessageEmbed } = require('discord.js');
const ms = require('ms');
module.exports.run = async (bot, message, args) => {
    message.delete();
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return;

        if (!args[0]) return message.reply(`:warning: Vous n\'avez pas spécifié de temps!`)

        const currentCooldown = message.channel.rateLimitPerUser;

        const reason = args[1] ? args.slice(1).join(' ') : 'Aucune raison fournie';

        const embed = new MessageEmbed()
            .setFooter(`${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL({ dynamic: true }))
            .setColor('#ff0000');
            

        if (args[0] === 'off') {

            if (currentCooldown === 0) return message.reply(':x: Le Slowmode est déja désactivé')

            embed.setTitle(':yes: Slowmode Désactivé')
                .setColor('#ff0000')
            return message.channel.setRateLimitPerUser(0, reason).then(m => m.send(embed))

        }

        const time = ms(args[0]) / 1000;

        if (isNaN(time)) return message.channel.send(':warning: Pas une heure valide, veuillez réessayer!');

        if (time >= 21600) return message.channel.send(':warning: Ce temps est trop élevée, veuillez saisir une valeur inférieure à 6 heures.');

        if (currentCooldown === time) return message.lineReply(`:yes: Le Slowmode est déja configuré sur ${args[0]}`);

        embed.setTitle('Slowmode Activé')
            .addField('Slowmode: ', args[0])
            .addField('Raison: ', reason)
            .setColor('#ff0000');

        message.channel.setRateLimitPerUser(time, reason).then(m => m.send(embed));

};

module.exports.get = {
    name: 'slowmode',
};