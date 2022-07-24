const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  message.delete();
    let msg = "```asciidoc\n== ROLES ==\n"
    let names = message.guild.roles.cache.map(c => `${c.name}`)
    let longest = names.reduce((long, str) => Math.max(long, str.length), 0)
    message.guild.roles.cache.forEach(c => {
      msg += `${c.name}${" ".repeat(longest - c.name.length)} -> ${c.members.size} members\n`
    })
    msg += "```"
    message.channel.send(msg, {
      split: true
    })
}

module.exports.get = {
  name: 'nbrole'
}