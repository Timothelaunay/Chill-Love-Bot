
module.exports.run = (bot, message, args) => {
    if(!message.member.hasPermission('MANAGE_ROLES')) return message.reply( `Vous n'avez pas la permission requise \`MANAGE_ROLES\``);

    const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]);
    if(!role) return message.reply(`Veuillez spécifier un rôle a supprimer.`);

    if(message.author.id != message.guild.ownerID) {
        if(role.position >= message.member.roles.highest.position) return message.reply(`Vous ne pouvez pas supprimer ce rôle.`);
    }

    if(!role.editable || role.id === message.guild.roles.everyone.id || role.deleted) return message.reply(`Je ne peux pas supprimer ce role, vérifiez que le rôle a supprimer est en dessous du mien et réessayez.`);

    role.delete().catch(err => {
        console.log(err);
        message.channel.send(`Une erreur est survenue, veuillez réessayer. \n\`\`\`js\n${err}\n\`\`\``);
    })

    message.reply(`Le rôle **@${role.name}** a été supprimé.`);
};

module.exports.get = {
    name: "delete-role"
};