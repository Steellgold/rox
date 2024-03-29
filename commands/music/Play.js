const Discord = require("discord.js");
const { client, database, msg, colors, fs, team, servers, ops} = require("../../rox");
const { MessageAttachment } = require('discord.js');
const ytdl = require("ytdl-core");
const search = require('yt-search')

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if(!message.member.voice.channel) return await msg.sendMsg("MUSIC_NO_VOICE",message, dataServer);
    if(!args[0]) return await msg.sendMsg("MUSIC_NO_ARGS",message,dataServer);

    let validate = await ytdl.validateURL(args[0]);
    if(!validate){
        search(args.join(' '), function (err, res) {
            if(err) return message.channel.send("An error was encurred, contact a administrator \nhttps://discord.gg/NVBwmFz");
            launch(res.videos[0].url, message, language, dataServer);
        });
    } else {

        await launch(args[0], message, language, dataServer);

    }
}

async function launch(args, message, language, dataServer){

    let validate = await ytdl.validateURL(args);
    if(validate){

        let info = await ytdl.getInfo(args);

        let data = ops.active.get(message.guild.id) || {};
        if(!data.connection) data.connection = await message.member.voice.channel.join();
        if(!data.queue) data.queue = [];
        data.guildID = message.guild.id;

        data.queue.push({
            songTitle: info.videoDetails.title,
            requester: message.author.tag,
            url: args,
            channel: message.channel.id
        });

        if(!data.dispatcher) await play(client,ops,data,language)
        else{
            await msg.sendMsgA(language("MUSIC_QUEUE_ADD",info.videoDetails.title.allReplace({
                "@everyone":"ping"
            }),message.author.username),message,dataServer);
        }

        ops.active.set(message.guild.id, data);

    }
}

async function play(client, ops, data, lang){
    await client.channels.cache.get(`${data.queue[0].channel}`).send(lang("MUSIC_CHANGE", data.queue[0].songTitle, data.queue[0].requester))

    data.dispatcher = data.connection.play(ytdl(data.queue[0].url, {filter: 'audioonly'}));
    data.dispatcher.guildID = data.guildID;

    data.dispatcher.once('finish', function (){
        finish(client,ops,this,lang);
    })
}

async function finish(client,ops,dispatcher,lang){
    let fetched = ops.active.get(dispatcher.guildID);
    fetched.queue.shift();
    if(fetched.queue.length > 0){
        ops.active.set(dispatcher.guildID, fetched);
        await play(client,ops,fetched,lang);
    }else{
        ops.active.delete(dispatcher.guildID);
        let vc = client.guilds.cache.get(dispatcher.guildID).me.voice.channel;
        if(vc) vc.leave();
    }
}

String.prototype.allReplace = function (obj) {
    var retStr = this;
    for (var x in obj) {
        retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
    }
    return retStr;
};

exports.help = {
    name: "play",
}