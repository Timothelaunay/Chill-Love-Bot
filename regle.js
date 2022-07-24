const { MessageEmbed } = require('discord.js');

module.exports.run = async(bot, message, args) => {
    message.delete();
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'êtes pas autorisé à utiliser cette commande");

    let channel = message.mentions.channels.first();
    if (!channel || channel.type !== "text") return message.reply(`**Veuillez spécifier un channel**`);


    let Embed2 = new MessageEmbed()
        .setTitle('RÈGLEMENT DU SERVEUR :')
        .setAuthor(message.guild.name)
        .setDescription('Merci de lire entièrement ce règlement et de le respecter dans son intégralité.\nCe règlement est complémentaire aux Conditions Générales d\'Utilisation de Discord que vous êtes tenu de respecter également.')
        .addField("- Article 1", "La pub mp ou sur le serveur est interdite. Sauf si une demande de partenariat est faite. ")
        .addField("- Article 2", "Ne pas mp les personnes qui ont les rôles mp sur demande ou mp férmer sauf en leurs faisant une demande.")
        .addField("- Article 3", "Les rôles sont obligatoire ( Les plus Important : Sexe, âge, mp ) Et Merci également de mettre une photo de profil si vous n'en avez pas.")
        .addField("- Article 4", "Les doubles comptes sont strictement interdit.")
        .addField("- Artcile 5", "Aucune insulte(s) entre vous")
        .addField("- Article 6", "Les données a caractère privé ne doivent en aucuns êtres divulguer. Si une personne vous donne par exemple ces réseaux sociaux vous ne devez en aucun cas les divulguer.")
        .addField("- Article 7", "Le spam peu importe sa nature est interdit.")
        .addField("- Article 8", "Vous devez respecter les salons textuels/vocaux et les autres. ")
        .addField("- Article 9", "Les photo de profil discord ayant comme contenu, un contenu a caractère Sexuelle est strictement interdit.")
        .addField("- Article 10", "Vous devez vous respecter les uns et les autres ( Pas de harcèlement etc ...)")

    channel.send(Embed2);

    let Embed3 = new MessageEmbed()
        .setTitle('- Article 11')
        .setDescription("Le troll est interdit sur le serveur")
        .addField("- Article 12", "Toutes sorte de menaces sont interdites.")
        .addField("- Article 13", "Le spam micro, le fait de crier dans son micro est interdit.")
        .addField("- Article 14", "Les liens vers des sites sont strictement interdit.")
        .addField("- Article 15", "Les propos racistes, homophobes, sexistes, et déplacer sont strictement interdits.")
        .addField("- Article 16", "L'utilisation des soundboard ou de voicemeeter sont strictement interdits. ")
        .addField("- Article 17", "Les liens vers des sites x underagesont strictement interdits.")
        .addField("- Article 18", "Les critiques visant à rabaisser ou nuire à une personne son strictement interdites.")
        .addField("- Article 19", "Les photos, images, gifs etc a caractère sexuelle sont strictement interdits.")
        .addField("- Article 20", "Toute Sorte de vente sont interdites")

    channel.send(Embed3);

    let Embed4 = new MessageEmbed()
    .setTitle(" - Article 21")
    .setDescription("Les discussions à caractère sexuel dans les vocaux et en message sont strictement interdits.")
    .addField(" - Article 22", "Toute Sorte de vente sont interdites")
    .addField("- Article 23", "Les selfies : L'article 226-8 du code pénal punit d'un an emprisonnement et de 15 000 euros d'amende le fait de publier, par quelque voie que ce soit, le montage réalisé avec l'image d'une personne sans son consentement, s'il n'apparaît pas à l'évidence qu'il s'agit d'un montage ou s'il n'en est pas expressément fait mention.")
    .addField("- Article 24", "Ne pas clicker sur des liens mp privée23 :\nNe pas quitter/ Rejoindre un vocal plusieurs fois")
    .addField("- Article 25", "Le harcèlement sexuel est le fait d'imposer à une personne, de façon répétée, des propos ou comportements à connotation sexuelle ou sexiste qui soit portent atteinte à sa dignité en raison de leur caractère dégradant ou humiliant, soit créent à son encontre une situation intimidante, hostile ou offensante.\nLorsque ces propos ou comportements sont imposés à une même victime par plusieurs personnes, de manière concertée ou à l'instigation de l'une d'elles, alors même que chacune de ces personnes n'a pas agi de façon répétée ; Les faits mentionnés aux I et II sont punis de deux ans d'emprisonnement et de 30 000 € d'amende.\nCes peines sont portées à trois ans d'emprisonnement et 45 000 € d'amende lorsque les faits sont commis.\nSi des personnes majeurs envoie aux mineurs des images pornographie un plainte peut être mise contre vous par la victime, et un signalement de votre compte Discord sera fait par nos soins.")
    .addField("- Article 26", "Il est strictement interdit de présenter ou de publier une photo torse nu ou présentant un corp dénudé toute personne ne respectant pas cette règle recevra en premier lieu un avertissement mais lors de la deuxième fois sera directement suivi d'un ban.")
    .addField("- Article 27","Seul les modos-tests, modérateurs ou administrations sont autoriser à contacter les gérant-staff.\nEn cas d'urgence contacter l'assistant co-directeur.\nEn cas d'urgence mais réèllement d'extrème urgence contacter les co-directeurs en passant d'abord par un ticket d'aide.");
    channel.send(Embed4);
};


module.exports.get = {
    name: 'regle'
};