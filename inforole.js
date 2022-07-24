const { MessageEmbed } = require("discord.js");

module.exports.run = async(client, message, args) => {
  message.delete();
        if (!args[0]) return message.channel.send("**Veuillez entrer un rôle!**")
        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase());
        if (!role) return message.channel.send("**Veuillez entrer un rôle valide!**");
        let oldStr = `${role.hexColor}`
        let hex = newStr = oldStr.substring(1);

        const status = {
            false: "Non",
            true: "Oui"
        }

        const permissions = {
            "ADMINISTRATOR": "Administrateur",
            "VIEW_AUDIT_LOG" : "Voir les logs du serveur",
            "VIEW_GUILD_INSIGHTS" : "Voir le vue d'ensemble",
            "MANAGE_GUILD" : "Gérer le serveur",
            "MANAGE_ROLES" :  "Gérer les rôles",
            "MANAGE_CHANNELS" : "Gérer les canaux",
            "KICK_MEMBERS" : "Kick des membres",
            "BAN_MEMBERS" : "Ban des membres",
            "CREATE_INSTANT_INVITE" : "Créer des invitations",
            "CHANGE_NICKNAME" : "Change Nickname",
            "MANAGE_NICKNAMES" : "Manage Nicknames",
            "MANAGE_EMOJIS" : "Gérer les émojis",
            "MANAGE_WEBHOOKS" :  "Gérer les Webhooks",
            "VIEW_CHANNEL" : "Lire les salons de texte et voir les salons vocaux",
            "SEND_MESSAGES" :  "Envoyer des messages",
            "SEND_TTS_MESSAGES" : "Envoyer des messages TTS",
            "MANAGE_MESSAGES" :"Gérer les messages",
            "EMBED_LINKS" : "Embed Links",
            "ATTACH_FILES" : "Joindre des fichiers ",
            "READ_MESSAGE_HISTORY" : "Lire l'historique des messages",
            "MENTION_EVERYONE" : "Mentionner @everyone, @here, et tous les rôles",
            "USE_EXTERNAL_EMOJIS" : "Utiliser des émojis externes",
            "ADD_REACTIONS" : "Ajouter des réactions",
            "CONNECT" : "Connecter",
            "SPEAK" : "Parler",
            "STREAM" : "Vidéo",
            "MUTE_MEMBERS" : "Mute des membres",
            "DEAFEN_MEMBERS" : "Rendre sourd les membres",
            "MOVE_MEMBERS" : "Déplacer les membres",
            "USE_VAD" : "Utiliser l'activité vocale",
            "PRIORITY_SPEAKER" : "Haut-parleur prioritaire",
        }



        const rolePermissions = role.permissions.toArray();
        const finalPermissions = [];
        for (const permission in permissions) {
            if (rolePermissions.includes(permission)) finalPermissions.push(`✔️ ${permissions[permission]}`);
            else finalPermissions.push(`:x: ${permissions[permission]}`);
        }

        let roleEmbed = new MessageEmbed()
            .setColor(`${role.hexColor}`)
            .setAuthor({ name: `Info d'un rôle du serveur: ${message.guild.name}`, iconURL: `${message.guild.iconURL({ dynamic: true })}`})
            .setTitle(`Role Info: \`[${role.name}]\``)
            .setThumbnail(message.guild.iconURL())
            .addFields(
                {name:"**Info**",
                 value: `**ID:** \`${
                     role.id
                    }\`\n**Nom:** ${
                        role.name
                    }\n**Couleur:** [${
                        role.hexColor}](https://www.color-hex.com/color/${hex
                    })\n**Membres:** ${
                            role.members.size
                    }\n**Position:** ${
                            role.position
                    }\n**Mentionable:** ${
                        status[role.mentionable
                        ]}\n**Creation:** <t:${Math.floor(role.createdTimestamp / 1000)}:D> <t:${Math.floor(role.createdTimestamp / 1000)}:R>\`\`\`diff\n${finalPermissions.join('\n')}\`\`\`\n`
                    })
            .setFooter({ text: `${message.member.displayName}`, iconURL: `${message.author.displayAvatarURL({ dynamic: true })}`})
            .setTimestamp()

        message.channel.send(roleEmbed);
};

module.exports.get = {
  name: 'inforole'
};