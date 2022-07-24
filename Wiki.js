const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete();
    const search = args.join("_");
    const msg = args.join(" ");
    if (!msg) {
      return message.channel.send('Veuillez entrer un texte !');
    }
    const link = `https://www.wikipedia.org/w/index.php?search=${search}&ns0=1`;
    const embed = new MessageEmbed()
      .setTitle("〃 Wikipédia")
      .addField(`Vous avez cherché: `, `${msg}`)
      .addField(`Resultats ➜ `, `[Ce que j'ai trouvé](${link})`)
      .setColor('#caa413'); 

    message.channel.send(embed);
};

module.exports.get = {
  name: 'Wiki'
};