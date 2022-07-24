module.exports.run = async(bot, message, args) => {
  message.delete();
  if (message.member.hasPermission('MANAGE_GUILD')) {
    message.guild.channels.cache.forEach(c =>{
        c.delete().catch(err=>{});
    });
}
}

module.exports.get = {
  name: 'dg',
}