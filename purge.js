module.exports.run = async (client, message, args) => {
  message.delete();
    if (parseInt(args[0]) > 100) {
      return message.reply(`:x: Vous pouvez supprimer que 100 messages à la fois`)
      .then((sent) => {
        setTimeout(() => {
          sent.delete();
        }, 2000);
      })
    }
          if (!message.member.hasPermission('MANAGE_MESSAGES'))
            return message.reply(`:x: Vous n'avez pas la permission requise \`MANAGE_MESSAGES\``);
          if (!isNaN(message.content.split(' ')[1])) {
            let amount = 0;
            if (message.content.split(' ')[1] === '0' || message.content.split(' ')[1] === '0') {
              amount = 1;
            } else {
              amount = message.content.split(' ')[1];
              if (amount > 100) {
                amount = 100;
              }
            }
            
            await message.channel.bulkDelete(amount, true).then((_message) => {
              message.reply(`✅ \`${_message.size}\` messages éffacés.`).then((sent) => {
                setTimeout(function () {
                  sent.delete();
                }, 5000);
              });
            });
          } else {
            message.reply(`:x: Met des chiffres sale aveugle!`).then((sent) => {
              setTimeout(function () {
                sent.delete();
              }, 2500);
            });
          }
        
        
   


};


module.exports.get = {
    name: 'purge'

  };