const Discord = require("discord.js");
const { client, botConf } = require('../../index');
const fs = require("fs");
const messages = require("./../../events/functions/messages");

client.on('message',message => {
    if (!message.guild) return;
    let db = JSON.parse(fs.readFileSync("database/guilds/" + message.guild.id + ".json", "utf8"));
    const prefix = db["prefix"];

    if(message.content.startsWith(prefix + "prefix")){
        const newPrefix = message.content.split(" ")[0];

        const guildLanguage = db["lang"] || "en";
        const language = require(`../../languages/${guildLanguage}`);

        if(!newPrefix){
            return message.channel.send(language("MISSING_ARGUMENTS"));
        }

        db["prefix"] = newPrefix;
        fs.writeFileSync("database/guilds/" + message.guild.id + ".json", JSON.stringify(guildLanguages), "utf-8");

        message.channel.send(language("PREFIX_UPDATED",newPrefix));
    }
});