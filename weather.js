const weather = require('weather-js');
const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {
  message.delete();
    weather.find({search: args.join(" "), degreeType: 'C'}, function (error, result){
        // 'C' can be changed to 'F' for farneheit results
        if(error) return message.channel.send(error);
        if(!args[0]) return message.channel.send('Merci de spécifier une ville');

        if(result === undefined || result.length === 0) return message.channel.send('**Ville inconnu**');

        var current = result[0].current;
        var location = result[0].location;

        const weatherinfo = new MessageEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`Voici le temps  de la ville de  ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor('RANDOM')
        .addField('Zone', `UTC${location.timezone}`, true)
        .addField('Type de degrée', 'Celsius', true)
        .addField('Temperature', `${current.temperature}°`, true)
        .addField('Vent', current.winddisplay, true)
        .addField('Ressenti', `${current.feelslike}°`, true)
        .addField('Humidité', `${current.humidity}%`, true);
        message.channel.send(weatherinfo);
      });
};
module.exports.get = {
  name: "weather"
};