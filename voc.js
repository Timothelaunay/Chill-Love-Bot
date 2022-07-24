const { MessageEmbed } = require ('discord.js');
module.exports.run = async (bot, message, args) => {
  message.delete();
  let size = message.guild.members.cache.filter(m => m.voice.channel).size;
    let vocembed = new MessageEmbed()
    .setColor('FF00FF')
    .setAuthor('Voici le nombre de personne en voc')
    .setDescription(`Il y a actuellement ${size} personne(s) en vocal`);
    message.channel.send(vocembed);
    
};
module.exports.get = {
  name: 'voc'
};