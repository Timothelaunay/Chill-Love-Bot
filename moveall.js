const { MessageEmbed } = require('discord.js');
module.exports.run = async(bot,message,args) => {
    message.delete();
    if (!message.member.permissions.any(["ADMINISTRATOR", "MOVE_MEMBERS"])) return message.reply(":x: Vous ne diposez pas des permission requises pour effectuer cette commande.");
    let channel = message.member.voice.channel;
    if (!channel) return message.channel.send("Merci de vous rendre dans un salon vocal");
    if (!message.guild.me.voice.connection) {
        channel.join().then((connection) => {
            message.guild.me.voice.setSelfDeaf(true);

            bot.on("voiceStateUpdate", async (oldmem, newmem) => {
                if (newmem.member.voice.channel && newmem.member.voice.channel.id !== channel.id) {
                    let newchannel = message.guild.channels.cache.get(newmem.member.voice.channel.id);
                    if (bot.user.id === newmem.member.user.id) {
                        channel.members.forEach(e => {
                            e.voice.setChannel(newchannel);
                            newchannel.leave();
                        });
                    }
                }
            });
        });
    } else {
        message.channel.send(`**Je ne peux pas me rendre dans le salon vocal**`);
    }
    let moveembed = new MessageEmbed()
    .setColor('#ff0000')
    .setAuthor('Déplacement :')
    .addField('Tout les membres ce tenant dans :',`${channel} ont était déplacer dans ${newmem}`)
    .setTimestamp(new Date());
    message.channel.send(moveembed);
};

module.exports.get = {
  name: 'moveall'
};