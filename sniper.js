const  { MessageEmbed } = require ('discord.js');

module.exports.run = async (bot, message, args) => {
  message.delete();
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Vous ne disposez pas des permissions requises pour effectuer cette commandes');

        const msg = bot.snipes.get(message.channel.id);
        if (!msg) return message.channel.send(`:x: Il n'y a rien à sniper ! `)

        const sniperEmebed = new MessageEmbed()
        .setAuthor(msg.author.tag, msg.author.displayAvatarURL())
        .setDescription(msg.content)
        .setColor('RANDOM')
        .setImage(msg.image)
        message.channel.send(sniperEmebed);
};

module.exports.get = {
  name: 'sniper'
}