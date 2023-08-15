const Discord = require('discord.js');
const client = new Discord.Client();

 

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
const sspStartEmbed = new Discord.MessageEmbed()
const sspSchereEmbed = new Discord.MessageEmbed()
const sspSteinEmbed = new Discord.MessageEmbed()
const sspPapierEmbed = new Discord.MessageEmbed()
const sspDefaultEmbed = new Discord.MessageEmbed()
// const rating =

 

client.on('message',msg => {
    if (msg.content ==='!ssp'){
    sspStartEmbed.setAuthor("Schere Stein Papier")
    sspStartEmbed.setDescription("Schreibe entweder `Schere`, `Stein` oder `Papier`!")
    msg.channel.send(sspStartEmbed);
    const filter = m => m.author.id === msg.author.id;
    const coll = msg.channel.createMessageCollector(filter, {max: 1, time: 30000});
    coll.on("collect", async msg =>{
        switch(msg.content.toLocaleLowerCase()){
            case "schere":
                const randomNumberOne = Math.floor(Math.random() * 3);
                if(randomNumberOne === 0){
                    sspSchereEmbed.setAuthor("User: Schere | Bot: Stein")
                    sspSchereEmbed.setDescription("Besser du lässt das, du hattest von anfang an keine Chanche gegen mich")
                }
                if(randomNumberOne === 1){
                    sspSchereEmbed.setAuthor("User: Schere | Bot: Schere")
                    sspSchereEmbed.setDescription("Hmm Gleichstand, nächstes mal hast du keine Chanche")
                }
                if(randomNumberOne === 2){
                    sspSchereEmbed.setAuthor("User: Schere | Bot: Papier")
                    sspSchereEmbed.setDescription("Gratulation, du hast mich geschlagen")
                }
                await msg.channel.send(sspSchereEmbed)
                break;
            case "stein":
                const randomNumbertwo = Math.floor(Math.random() * 3);
                if(randomNumbertwo === 0){
                    sspSteinEmbed.setAuthor("User: Stein | Bot: Stein")
                    sspSteinEmbed.setDescription("Hmm Gleichstand, nächstes mal hast du keine Chanche")
                }
                if(randomNumbertwo === 1){
                    sspSteinEmbed.setAuthor("User: Stein | Bot: Schere")
                    sspSteinEmbed.setDescription("Gratulation, du hast mich geschlagen")
                }
                if(randomNumbertwo === 2){
                    sspSteinEmbed.setAuthor("User: Stein | Bot: Papier")
                    sspSteinEmbed.setDescription("Besser du lässt das, du hattest von anfang an keine Chanche gegen mich")
                }
                await msg.channel.send(sspSteinEmbed)
                break;
            case "papier":
                const randomNumberthree = Math.floor(Math.random() * 3);
                if(randomNumberthree === 0){
                    sspPapierEmbed.setAuthor("User: papier | Bot: Stein")
                    sspPapierEmbed.setDescription("Gratulation, du hast mich geschlagen")
                }
                if(randomNumberthree === 1){
                    sspPapierEmbed.setAuthor("User: papier | Bot: Schere")
                    sspPapierEmbed.setDescription("Besser du lässt das, du hattest von anfang an keine Chanche gegen mich")
                }
                if(randomNumberthree === 2){
                    sspPapierEmbed.setAuthor("User: papier | Bot: Papier")
                    sspPapierEmbed.setDescription("Hmm Gleichstand, nächstes mal hast du keine Chanche")
                }
                await msg.channel.send(sspPapierEmbed)
                break;
            default:
                sspDefaultEmbed.setAuthor("Du hast einfach verkackt im Leben, ned mal ssp kannst du schreiben")
                sspDefaultEmbed.setDescription("lol lost, starte mit !ssp neu Imao")
                await msg.channel.send(sspDefaultEmbed)
                break;
        }
    })
}});

 

client.on('message', msg => {
        if(msg.content === 'test') {
            var rating = Math.floor(Math.random() * 4);
            msg.reply(`I rate you ${rating}/3`);
        }
    });

 


client.login('token');