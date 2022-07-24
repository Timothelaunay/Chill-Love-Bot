const pagination = require('discord.js-pagination');
const { MessageEmbed } = require('discord.js');

module.exports.run = async(bot, message, args) => {
    message.delete();

    const home = new MessageEmbed()
        .setTitle('→ Accueil ←')
        .setDescription('**Voici nos commandes principales**')
        .addField('`z!aide`', 'Affiche ce panel', true)
        .addField('`z!qrcode`', 'Affiche le qrcode du bot', true)
        .setImage('https://zupimages.net/up/21/02/9k49.jpg')
        .setColor("#FF0000")
        .setTimestamp()

    const moderation = new MessageEmbed()
        .setTitle('→ Modération ←')
        .setColor("#FF0000")
        .addFields(
            {name: '`z!lock`', value: 'Permet de bloquer le salon mentionner', inline: true},
            {name: '`z!nick`', value: 'Vous permet de modifier le pseudo de n\'importe qui', inline: true},
            {name: '`z!nuke`', value: 'Permet de supprimer le salon', inline: true},
            {name: '`z!ping`', value: 'Vous verrez la latence du bot et de l\'API', inline: true},
            {name: '`z!purge`', value: 'Permet de supprimé des message de 1 à 99', inline: true},
            {name: '`z!reset-nick`', value: 'Vous permet de réinitialisé le pseudo de n\'importe qui', inline: true},
            {name: '`z!say`', value: 'Permet de discuter avec le bot', inline: true},
            {name: '`z!unlock`', value: 'Permet de débloquer le salon mentionner', inline: true},
            {name: '`z!uptime`', value: 'Permet de savoir le temps que tu passe en vocal', inline: true},
            {name: '`z!voc`', value: 'Permet de savoir le nombre de personne qui est en vocal', inline: true}
        )
        .setTimestamp()

    const sanction = new MessageEmbed()
            .setTitle('→ Sanction ←')
            .setColor('#ff0000')
            .addFields(
                {name: '`z!ban-list`', value: 'Permet de voir qui est ban du serveur', inline: true},
                {name: '`z!ban`', value: 'Permet de bannir un membre', inline: true},
                {name: '`z!kick`', value: 'Permet d\'expulser un membre', inline: true},
                {name: '`z!mute`', value: 'Permet de couper l\'accès à un membre', inline: true},
                {name: '`z!reset-warns`', value: 'Permet de réinisialiser les avertissement d\'un membre', inline: true},
                {name: '`z!unban-all`', value: 'Permet de débannir toutes les personnes bannis', inline: true},
                {name: '`z!unban`', value: 'Permet de débannir un membre', inline: true},
                {name: '`z!unmute`', value: 'Permet de redonner l\'accès à un membre', inline: true},
                {name: '`z!voice-kick`', value: 'Permet d\'expulser un membre du vocal', inline: true},
                {name: '`z!warn`', value: 'Permet d\'atribué un avertissement à un membre', inline: true},
                {name: '`z!warnings`', value: 'Permet de voir combien d\'avertissement à un membre mentionner', inline: true}
            )
    const fun = new MessageEmbed()
        .setTitle('→ Fun ←')
        .setColor("#FF0000")
        .addFields(
            {name: '`z!8ball`', value: 'Parler au bot en mode aléatoire', inline: true},
            {name: '`z!amongus`', value: 'Vous envoi un gif de amongus', inline: true},
            {name: '`z!ascii`', value: 'Mettez un message et le bot vous le renverra en mode ascii', inline: true},
            {name: '`z!avatar`', value: 'Vous envoi l\'avatar', inline: true},
            {name: '`z!blague`', value: 'Vous sort des blagues de merde', inline: true},
            {name: '`z!calin`', value: 'Vous pouvez faire un calin à la personne que vous devez mention', inline: true},
            {name: '`z!dance`', value: 'Envoi un gif de dance', inline: true},
            {name: '`z!dice`', value: 'Envoi unn chiffre entre 1 & 6', inline: true},
            {name: '`z!dors`', value: 'Envoi un gif de dodo', inline: true},
            {name: '`z!fou`', value: 'Envoi un gif de fou', inline: true},
            {name: '`z!fume`', value: 'Envoi un gif d\'une personne qui fume', inline: true},
            {name: '`z!furax`', value: 'Envoi un gif d\'une personne qui est furax', inline: true},
            {name: '`z!gay`', value: 'Envoi un gif d\'une personne qui est gay', inline: true},
            {name: '`z!imposteur`', value: 'Envoi un gif d\'une personne qui est impsteur dans amongus', inline: true},
            {name: '`z!insta`', value: 'Vous donne les stats d\'un compte ', inline: true},
            {name: '`z!kiss`', value: 'Vous pouvez vous faire des bisous', inline: true},
            {name: '`z!naruto`', value: 'Envoi un gif d\'un perso de Naruto', inline: true},
            {name: '`z!piece`', value: 'Jouer au pile ou face', inline: true}
        )
        .setTimestamp()

    const info = new MessageEmbed()
        .setTitle('→ Information ←')
        .setColor('#FF0000')
        .addFields(
            {name: '`z!banner`', value: 'Affiche la bannière du membre mentionner', inline: true},
            {name: '`z!bot-list`', value: 'Affiche la liste des bot', inline: true},
            {name: '`z!dm`', value: 'Permet d\'evoyer un mp', inline: true},
            {name: '`z!infobot`', value: 'Obtien les information du bot', inline: true},
            {name: '`z!infochannel`', value: 'Obtien les information d\'un salon écrit', inline: true},
            {name: '`z!inforole`', value: 'Obtien les information d\'un role', inline: true},
            {name: '`z!infoserver`', value: 'Obtien les information sur le serveur', inline: true},
            {name: '`z!infouser`', value: 'Obtien les information d\'un membre', inline: true},
            {name: '`z!invite`', value: 'Permet de créer une invitation', inline: true},
            {name: '`z!suggestion`', value: 'Permet de faire une suggetion', inline: true},
            {name: '`z!support`', value: 'Vous invite sur le serveur support', inline: true},
            {name: '`z!ticket`', value: 'Vous permet de créer un ticket en cas de problème', inline: true},
            {name: '`z!weather`', value: 'Vous affiche la météo de la ville que vous avez demander', inline: true},
            {name: '`z!Wiki`', value: 'Permet de faire une recherche sur Wikipédia', inline: true}
        )
        .setTimestamp()

    const dev = new MessageEmbed()
        .setTitle('→ Développeur ←')
        .addFields(
            {name:'`z!bot`', value: 'Permet d\'inviter le bot sur votre serveur', inline: true},
            {name:'`z!role`', value: 'Affiche tout les rôles du serveur', inline: true}
        )
        .setColor("#FF0000")
        .setTimestamp()

    const admin = new MessageEmbed()
        .setTitle('→ Administration ←')
        .addFields(
            {name:'`z!add-role`',value: 'Permet d\'ajouter un role à un membre', inline: true},
            {name:'`z!close`',value: 'Permet de fermer un ticket', inline: true},
            {name:'`z!force-close`',value: 'Permet de forcer la fermeture d\'un ticket', inline: true},
            {name:'`z!member-count`',value: 'Permet de savoir le nombre de membre sur le serveur', inline: true},
            {name:'`z!moveall`',value: 'Permet de déplacer toutes les personnese trouvant dans un salon vers un autre', inline: true},
            {name:'`z!regle`',value: 'Permet d\'afficher le règlement dans un salon mentionner', inline: true},
            {name:'`z!remrole`',value: 'Permet de retirer un role à un membre', inline: true},
            {name:'`z!slowmode`',value: 'Permet d\'activer un chronomètre sur un salon', inline: true},
            {name:'`z!sniper`',value: 'Permet d\'afficher un message supprimé', inline: true}
        )
        .setColor("#FF0000")
        .setTimestamp()

    const owner = new MessageEmbed()
        .setTitle('→ Owner ←')
        .setDescription('D\'autres fonctions arrivent ...')
        .addFields(
            {name: '`z!add-admin`', value: "Permet d'ajouter le role admin avec les permissions", inline: true},
            {name: '`z!all-perm`', value: 'Permet de d\'ajouter toutes les permissions qui sont dangeureuses', inline: true},
            {name: '`z!create-cat`', value: 'Permet de créer une catégorie', inline: true},
            {name: '`z!create-text`', value: 'Permet de créer un salon écrit', inline: true},
            {name: '`z!create-voice`', value: 'Permet de créer un salon vocal', inline: true},
            {name: '`z!dc`', value: 'Permet de supprimé un salon écrit', inline: true},
            {name: '`z!delete-role`', value: 'Permet de supprimé un rôle', inline: true},
            {name: '`z!dg`', value: 'Permet de supprimé tout les salons et toutes les catégories', inline: true},
            {name: '`z!join`', value: 'Permet de connecter le bot dans un salon vocal', inline: true},
            {name: '`z!leave`', value: 'Permet de supprimé le bot du serveur', inline: true},
            {name: '`z!liste`', value: 'Permet d\'afficher dans quel serveur se trouve le bot', inline: true},
            {name: '`z!lockall`', value: 'Permet de bloqué tout les salons', inline: true},
            {name: '`z!massiverole`', value: 'Permet d\'ajouter un role à tout les membres du serveur', inline: true},
            {name: '`z!remall-perm`', value: 'Permet de supprimé un salon écrit', inline: true},
            {name: '`z!restart`', value: 'Permet de retirer toutes les permissions qui sont dangeureuses', inline: true},
            {name: '`z!stat`', value: 'Permet de voir les stats du serveur', inline: true},
            {name: '`z!template`', value: 'Permet de créer une backup du serveur', inline: true},
            {name: '`z!unlockall`', value: 'Permet de débloqué tout les salons', inline: true},
            {name: '`z!voc-stats`', value: 'Permet de voir les stats  des vocaux du serveur', inline: true}
        )
        .setColor("#FF0000")
        .setTimestamp();

    const pages = [
        home,
        admin,
        dev,
        fun,
        info,
        moderation,
        sanction,
        owner
        
        
    ]

    const emojiList = ["⬅️", "➡️"];
    const timeout = '120000';

    pagination(message, pages, emojiList, timeout)
};

module.exports.get = {
    name: 'aide'
};