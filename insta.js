const { MessageEmbed } = require ("discord.js");
const axios = require('axios');
module.exports.run = async(bot, message, args) => {
    message.delete();
    if (!args[0]) {
        return message.reply(`Merci de bien vouloir entré un pseudo instagram`)
    }
    let url, response, account, details;
    try {
        url = `https://instagram.com/${args[0]}/?__a=1`;
        response = await axios.get(url)
        account = response.data
        details = account.graphql.user
    } catch (error) {
        return message.channel.send(`:x: Compte introuvable`)
    }

    const embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
        .setTitle(`Voici l'instagram de :${details.is_verified ? `${details.username} ✅` : ` ${details.username}`} ${details.is_private ? '🔒' : ''} `)
        .setDescription(`Voici sa description : **${details.biography}**`)
        .setThumbnail(details.profile_pic_url)
        .setColor("#ff00ff")
        .addFields(
            {
                name: "Total de poste:",
                value: details.edge_owner_to_timeline_media.count.toLocaleString(),
                inline: true
            },
            {
                name: "Total d'abonnés :",
                value: details.edge_followed_by.count.toLocaleString(),
                inline: true
            },
            {
                name: "Total d'abonnements:",
                value: details.edge_follow.count.toLocaleString(),
                inline: true
            }
        )
        .setTimestamp()  
        .setFooter(bot.user.username,bot.user.displayAvatarURL({dynamic : true }))
     message.channel.send(embed);
};

module.exports.help = {
    name: "insta"
};