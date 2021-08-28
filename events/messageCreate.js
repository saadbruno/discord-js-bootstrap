module.exports = {
    name: 'messageCreate',
    execute(message) {

        // se o bot receber uma mensagem de outro bot, ignorar. Isso previne loop infinitos.
        if (message.author.bot) {
            return;
        }

        console.log(`:: ${message.author.tag} enviou uma mensagem em #${message.channel.name}: ${message.content}`);
        // console.log(message);
    },
};