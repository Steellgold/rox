const Discord = require('discord.js');
const {colors, client, fs, database} = require('../../rox')

String.prototype.allReplace = function (obj) {
    var retStr = this;
    for (var x in obj) {
        retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
    }
    return retStr;
};

client.on('guildMemberRemove', member => {
    let sql = `SELECT * FROM servers WHERE guildid = ${member.guild.id}`;
    database.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }

        if (results[0].announceChannel !== "false") {
            const channel = client.channels.cache.get(`${results[0].announceChannel}`)
            if(channel){
                console.log("le channel existe")
            }else{
                console.log("le channel existe pas")
            }

            channel.send(results[0].quitText.allReplace({
                "{mention}": "<@" + member.id + ">",
                "{username}": member.user.username,
                "{guildName}": member.guild.name
            }))
        }
    });
});