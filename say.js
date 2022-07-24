module.exports.run = async (bot, message, args) => {
  let texto = args.join(' ');
  if(!texto) return message.channel.send('Merci d\'inserer un text');
  message.delete()
  message.channel.send(texto);
};

module.exports.get = {
  name: 'say'
};