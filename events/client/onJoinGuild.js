const Discord = require("discord.js");
const { client, guildLanguages, guildPrefixs } = require('../../index');
const config = require('../../servers/config');
const fs = require('fs');

client.on('guildCreate',guild => {
    if (guild.channels.exists('name', "general")) {
        let embed = new Discord.RichEmbed()
        embed.setTitle(config.prefixFox + "Rox")
        embed.setDescription("Thanks for adding me, you can configure the language of the bot on the server with the `!setlang` command, or view the help page with `!help`.")
        embed.setFooter(config.footerEmbed)
        guild.channels.find(`name`, `general`).send(embed);
        exports.channel = guild.channels.find(`name`, `general`);
    }

    var jsonData = `{"name":"${guild.name}","lang": "en","prefix": "!","eventMsg": false,"autoRole": false,"autoRoleId": 0,"joinChannelId": 0,"quitChannelId": 0}`;

    var jsonObj = JSON.parse(jsonData);

    var jsonContent = JSON.stringify(jsonObj);
    fs.writeFile("database/guilds/" + guild.id + ".json", jsonContent, 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }

        console.log("Création du fichier " + guild.id + ".json - pour le serveur : " + guild.name);
    });

    return;
});