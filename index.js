const { Client, Collection, MessageEmbed, MessageAttachment } = require('discord.js');
const bot = new Client();
const config  = require('./config.json');
const fs = require('fs');
const { readdirSync } = require('fs');
require('dotenv').config();
const moment = require ('moment');
const Canvas = require ('canvas');
bot.snipes = new Map();
bot.commands = new Collection();

bot.on('ready', () => {
  console.log(`(${bot.user.username}) est prêt !`);
  bot.user.setStatus('dnd');
  bot.user.setActivity('z!aide', {type: "PLAYING"});
});

const loadCommands = (dir = "./cmds") => {
    readdirSync(dir).forEach(dirs => {
        const commands = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

        for (const file of commands) {
            const filesName = require(`${dir}/${dirs}/${file}`);
            const files = file.split(".")[0];
            bot.commands.set(files, filesName)
            console.log(`[⭐] Commande chargé : ${files}`);
        };
    });
};
loadCommands();

const loadEvents = (dir = "./events") => {
    fs.readdirSync(dir).forEach(dirs => {
        const eventFiles = fs.readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

        for (const event of eventFiles) {
            const evt = require(`${dir}/${dirs}/${event}`);
            const evtName = event.split(".")[0];
            bot.on(evtName, evt.bind(null, bot));
            console.log("[〽️] L'évenement " + evtName + " est prêt.");

        };
    });
};
loadEvents();

bot.on("message", async message => {

    if (message.channel.type === "dm")
        return;

    let prefix = config.prefix;
    if (!message.content.startsWith(prefix))
        return;
    let messageArray = message.content.split(" ")
    let command = messageArray[0];
    let args = messageArray.slice(1);

    let commandFile = bot.commands.get(command.slice(prefix.length));
    if (commandFile)
        commandFile.run(bot, message, args);
});

bot.on('guildCreate', guild => {

    const embed = new MessageEmbed()
        .setDescription(`📌 Merci à **${guild.name}** d'avoir ajouté Kossi Drôle.`)
        .addField("📋 __Nom du serveur__", guild.name, true)
        .addField("📊 __Nombre de membres__ :", guild.memberCount, true)
        .addField("💻 __Nombre de salons__ :", guild.channels.size, true)
        .addField("👑 __Propriétaire__ :", guild.owner, true)
        .addField("🌍 __Région du serveur__ :", guild.region, true)
        .addField("📝 __ID du serveur__ :", guild.id, true)
        .addField("🗺️ __Serveurs actuel__ :", true)

    .setColor("#F03A17")
    bot.channels.cache.get(config.defaultChannel).send(embed);
});

const invites = {};

const wait = require('util').promisify(setTimeout)
bot.on('ready', async () => {

  await wait(1000);
  bot.guilds.cache.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});
bot.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => !ei.get(i.code) || ei.get(i.code).uses < i.uses);
    const inviter = bot.users.cache.get(invite.inviter.id);
    let joinembed = new MessageEmbed()
    .setColor('#00ff00')
    .setThumbnail(member.user.displayAvatarURL({dynamic: true, size: 512}))
    .setAuthor(`Hey ${member.user.tag} `)
    .setDescription(`**Bienvenue sur ${member.guild.name}**`)
    .setThumbnail(member.guild.iconURL({dynamic:true}))
    .addField("Il a rejoint avec ce code d'invitation :" , `${invite.code}`)
    .addField('Il à était créer par :' , `${inviter.tag}`)
    .addField('Elle à été utilisée :' , `${invite.uses} fois depuis sa création.`)
    .setTimestamp()
    bot.channels.cache.get('987676002887020564').send(joinembed);
})});

bot.on("guildMemberAdd", async member => {

    let user = member;
    const canvas = Canvas.createCanvas(700, 250);
    const ctx = canvas.getContext(`2d`);

    const background = await Canvas.loadImage(`./wallpaper.jpg`);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.font = `40px Calvert MT Std`;
    ctx.fillStyle = `#ffffff`;

    ctx.fillText(user.user.username, canvas.width / 2.2, canvas.height / 1.7);
    ctx.fillText((user.user.bot ? '🤖' : '🙎‍♂️'), canvas.width / 1.1, canvas.height / 4.2)
    ctx.fillText((moment(user.user.createdAt).format('DD/MM/YYYY')), canvas.width / 1.5, canvas.height / 1.05)

    ctx.beginPath();
    ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();
    const avatar = await Canvas.loadImage(user.user.displayAvatarURL({ format: 'png' }))
    ctx.drawImage(avatar, 25, 25, 200, 200);

    const attachment = new MessageAttachment(canvas.toBuffer(), './Welcome.jpg');


    bot.channels.cache.get('987047049511968859').send(attachment)
    member.roles.add('987055209480089600');
});
bot.on('guildMemberAdd', member => {
    bot.channels.cache.get('987653105426505789').send(`${member}`)
    let embedjoin = new MessageEmbed()
    .setColor('#ff0000')
    .setAuthor('Bienvenue')
    .setThumbnail(member.guild.iconURL({dynamic: true, size: 512}))
    .setDescription(`Bienvenue **${member}** sur ${member.guild.name}\nPenser à lire et à comprendre le <#987047049511968860>\nInstalles toi et pense à faire tes <#987054663310385193> ainsi que <#987054732529000508>`)
    .setTimestamp()
    bot.channels.cache.get('987653105426505789').send(embedjoin)
});

bot.on("guildMemberRemove", async member => {

    let user = member;
    const canvas = Canvas.createCanvas(700, 250);
    const ctx = canvas.getContext(`2d`);

    const background = await Canvas.loadImage(`./Bye.jpg`);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.font = `40px Calvert MT Std`;
    ctx.fillStyle = `#ffffff`;

    ctx.fillText(user.user.username, canvas.width / 2.2, canvas.height / 1.7);
    ctx.fillText((user.user.bot ? '🤖' : '🙎‍♂️'), canvas.width / 1.1, canvas.height / 4.2)
    ctx.fillText((moment(user.user.createdAt).format('DD/MM/YYYY')), canvas.width / 1.5, canvas.height / 1.05)

    ctx.beginPath();
    ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();
    const avatar = await Canvas.loadImage(user.user.displayAvatarURL({ format: 'png' }))
    ctx.drawImage(avatar, 25, 25, 200, 200);

    const attachment = new MessageAttachment(canvas.toBuffer(), './Welcome.jpg');


    bot.channels.cache.get('988913247170199642').send(attachment)
});

bot.on('guildMemberRemove', member => {
      let leaveembed = new MessageEmbed()
      .setColor('#ff0000')
      .setDescription(`**Ah bah non ${member} viens de quitter ${member.guild.name}**`)
      .setThumbnail(member.guild.iconURL({dynamic: true, size: 512}))
      .setTimestamp()
      bot.channels.cache.get('987676002887020564').send(leaveembed)
});

bot.login(process.env.TOKEN);