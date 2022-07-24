const Discord = require('discord.js');
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  message.delete();
  if (!message.member.permissions.has('MANAGE_GUILD')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande !");
    if (!args.length) return message.reply("Utilisation de la Commande: `masiverole add/remove <role>`");
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`:x: Désolé, mais vous n'avez pas la permission requise pour executer cette commande.`);
    if(args[0] === "add") {
        const role =
        message.guild.roles.cache.find(
          (role) => role.name === args.join(" ").slice(1)
        ) || message.mentions.roles.first() || message.guild.roles.cache.get(args.join(" ").slice(1));
  
      if (message.guild.me.roles.highest.comparePositionTo(role) < 0) {
        return message.reply(`Mon rôle n'est pas assez haut pour que j'ajoute le rôle **${role.name}** !`);
      }
  
      if (message.member.roles.highest.comparePositionTo(role) < 0) {
        return message.reply(`Votre rôle doit être supérieur à **${role.name}**`);
      }
  
      if (!role) {
        return message.reply(` Veuillez fournir un rôle valide`);
      }
  
      message.guild.members.cache.forEach(member => member.roles.add(role));
  
      message.channel.send(`** ${role.name} ** a bien été ajouté à tout le monde`);    
    }
    if(args[0] === "remove") {
        const role =
        message.guild.roles.cache.find(
          (role) => role.name === args.join(" ").slice(1)
        ) || message.mentions.roles.first() || message.guild.roles.cache.get(args.join(" ").slice(1));
  
      if (message.guild.me.roles.highest.comparePositionTo(role) < 0) {
        return message.reply(` Mon rôle n'est pas assez haut pour que j'enlève le rôle **${role.name}** !`);
    }

    if (message.member.roles.highest.comparePositionTo(role) < 0) {
      return message.reply(` Votre rôle doit être supérieur à **${role.name}**`);
      }
  
      if (!role) {
        return message.reply(` Veuillez fournir un rôle valide`);
      }
  
      message.guild.members.cache.forEach(member => member.roles.remove(role));
  
      message.channel.send(`** ${role.name} ** a bien été enlever à tout le monde`);    
    }
};

module.exports.get = {
  name: "massiverole",
};