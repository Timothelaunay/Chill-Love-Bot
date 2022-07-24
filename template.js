module.exports.run = async (bot, message, args) => {
  message.delete();
  if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande !");
  let nameguild = args[0]
      if (!nameguild) {
        nameguild = "Server Template"
      }
      try {
        message.guild.createTemplate(`${nameguild}`, "Template généré").then(template => message.channel.send(`**Voici le lien vers le modèle du serveur :**\n https://discord.new/${template.code}`))
        .catch(err => message.channel.send(":x: Je ne parviens pas à créer une template !\n*Verifiez que je possède les permissions suffisantes ou alors un modèle est déja existant pour ce serveur*"));
        
      } catch {
        message.channel.send("Je ne parviens pas à créer une template !\n**Verifiez que je possède les permissions suffisantes ou alors un modèle est déja existant pour ce serveur**");
      }
};

module.exports.get = {
  name: 'template'
};