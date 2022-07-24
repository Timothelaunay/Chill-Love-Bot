const { MessageEmbed } = require('discord.js');
module.exports.run = async (bot, message, args) => { 
        message.delete();

        if (!message.member.hasPermission(["ADMINISTRATOR"])) return message.reply( `:x: Vous n'avez pas la permission requise \`ADMINISTRATOR\``);

        let user = message.mentions.users.first();
        if (!user) return message.reply(`:x: Merci de mentionner un utilisateur`);

        let nick = args.slice(1).join(" ");
        if (!nick) return message.reply(`Merci de mettre le nouveau pseudo`);

        let logchannel = message.guild.channels.cache.get('999058217504088154');

        let member = message.guild.members.cache.get(user.id);
        
        await member.setNickname(nick, []);

        let nickembed = new MessageEmbed()
        .setColor('#ff0000')
        .setAuthor(member.user.username)
        .addField('Ancien Pseudo', member.user.username, true)
        .addField('Nouveau Pseudo', nick, true)
        .setFooter(member.guild.name)
        .setTimestamp();
        logchannel.send(nickembed)
};
    module.exports.get = {
        name: "nick"
};