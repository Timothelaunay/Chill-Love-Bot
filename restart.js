
module.exports.run = async (bot, message, args) => {
message.delete();

    if (message.author.id !== '925444303797506079') return message.reply("Vous ne dispoez pas des permissions requises pour effectuer cette commande");
    message.channel.send("🕙 Reboot en cours ...").then(async msg => {
        msg.edit("🕙 Reboot en cours ...")
        bot.destroy();
        await bot.log("OTk5MzA1Njk2MzI5ODY3Mjk2.Goe6K1.SQwAD_zTr_-hd48yhGuM89UIXy0dB27gyUmtQw");
        await msg.edit("🕙 Reboot en cours ...")
        msg.edit("Reboot bien effectué")
    });
};

module.exports.help = {
    name: "restart"
}