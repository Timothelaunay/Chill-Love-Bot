const { MessageEmbed } = require ('discord.js');
const config = require ('../../config.json');
const db = require ('quick.db');

module.exports.run = async(bot, message, args) => {
  try {
    let fetched = await db.fetch(`prefix_${message.guild.id}`);
    if (fetched == null) {
        prefix = config.prefix
    } else {
        prefix = fetched
    }
} catch (e) {
    console.log(e);
}

let embed = new MessageEmbed()
.setTitle(`${bot.user.username} est là !`)
.setDescription(`Hey **${message.author.username},** c'est moi ${bot.user.username}. voilà comment m'ajouter à ton serveur : 
**Bot Prefix:** \`${config.prefix}\`
**Lien d'invitation:** [Click Moi](https://discord.com/api/oauth2/authorize?client_id=952585675075629147&permissions=8&scope=bot%20applications.commands)
**Developpeur**[Tim#9047](https://discord.gg/WddaraZa2B)
`)
.setColor("#ff0000")
.setFooter(`Merci de m'avoir utiltiser`)

return message.channel.send(embed);
};

module.exports.get = {
  name: 'bot'
};