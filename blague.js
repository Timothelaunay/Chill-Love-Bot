module.exports.run = async(bot, message, args) => {
    message.delete();
    var jokes = [
        "J'ai mangé une horloge hier, cela prenait beaucoup de temps.",
        "Si nous ne devons pas manger le soir, pourquoi mettent-ils une lumière dans le frigo?",
        "Keski et jaune et qui attend ? Jonathan ",
        "Que donnent un cochon et un mouton qui s’accouplent ? (De la porcelaine.)"

    ]
    var response = jokes[Math.floor(Math.random() * jokes.length)];
    message.channel.send(response).then().catch(console.error);
}


module.exports.get = {
    name: 'blague'
}