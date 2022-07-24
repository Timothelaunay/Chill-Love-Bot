const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports.run = async (bot, message, args) => {
    message.delete()

   
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("Vous ne posséder pas les permission pour effectuer cette commande")
    }
    
    const user = message.mentions.members.first()
    
    if(!user) {
      return message.channel.send("Merci de préciser l'utilisateur - warn @mention <raison>")
    }
    
    if(message.mentions.users.first().bot) {
      return message.channel.send("Je ne peux pas warn un de mes frères 'mais ça va pas non' ")
    }
    
    if(message.author.id === user.id) {
      return message.channel.send("Vous ne pouvez pas vous warn")
    }
    
    if(user.id === message.guild.owner.id) {
      return message.channel.send("Vous ne pouvez pas warn mon maître -_-")
    }
    
    const reason = args.slice(1).join(" ")
    
    if(!reason) {
      return message.channel.send("Merci de préciser le membre ainsi que la raison du warn - warn @mention <raison>")
    }
    
    let warnings = db.get(`warn_${message.guild.id}_${user.id}`)
    
    if(warnings === 3) return message.channel.send(`${message.mentions.users.first().username}  à déjà atteint sa limite avec 3 avertissements`);
    
    let logchannel = message.guild.channels.cache.get('998582761382219867');
    
    if(warnings === null) {
      db.set(`warnings_${message.guild.id}_${user.id}`, 1)
      user.send(`Vous venez de recevoir un avertissement sur **${message.guild.name}** pour la raison suivante **${reason}**`)

      let warnembed = new MessageEmbed()
      .setColor('#ff0000')
      .setAuthor(`__Warn__`)
      .setThumbnail(message.guild.iconURL({dynamic: true}))
      .addField('Personne Avertis : ', `${message.mentions.users.first().username}`)
      .addField('Raison : ', `${reason}`);
      logchannel.send(warnembed);

    } else if(warnings !== null) {
        db.add(`warnings_${message.guild.id}_${user.id}`, 1)
       user.send(`Vous venez de warn**${message.guild.name}** pour ${reason}`)
      await message.channel.send(`Vous venez de warn **${message.mentions.users.first().username}** pour ${reason}`);
    }
};

module.exports.get = {
  name: 'warn'
};