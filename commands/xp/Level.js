const Discord = require("discord.js");
const { client, botConfg, fs, colors,messages} = require("../../rox");

const { Canvas } = require('canvas-constructor');
const { MessageAttachment } = require('discord.js');
const fetch = require('node-fetch');
var path = require('path');

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if (!message.guild) return;

    Canvas.registerFont('font/Heroes.ttf', {"family": "Heroes"})

    let sql = `SELECT * FROM goldUsers WHERE userid = ${message.author.id}`;
    database.query(sql, function (error, results, fields) {
        if (error) {
            return false;
        } else if (results.length > 0) {
            send(true,message, database)
        } else {
            send(false,message, database)
        }
    });
}

async function send(option, message, database){
    if(option == true){
        const buffer = await profileGold(message, database);
        const filename = `${message.author.id}.png`;
        const Attach = new MessageAttachment(buffer, filename);
        await message.channel.send(Attach);
    }else{
        const buffer = await profile(message, database);
        const filename = `${message.author.id}.png`;
        const Attach = new MessageAttachment(buffer, filename);
        await message.channel.send(Attach);
    }
}

async function profile(message, database) {
    const member = message.member;

    database.query(`SELECT * FROM servers_xp WHERE guildid=${message.guild.id} AND userid=${message.author.id}`, function (error, results, fields) {
        if (error) {
            return false;
        } else if (results.length > 0) {
            exports.level = results[0].level;
            exports.xp = results[0].xp;
            exports.maxXp = results[0].level * 150 + results[0].level * 35;
        } else {

        }
    });

    const result = await fetch(member.user.displayAvatarURL({format: 'png'}));
    if (!result.ok) new Error('Failed to get the avatar!');
    const avatar = await result.buffer();

    const name = member.displayName.length > 9 ? member.displayName.substring(0, 17) + '...'
        : member.displayName;

    return new Canvas(400, 180)
        .setColor("#7289da")
        .addRect(84, 0, 316, 180)
        .setColor("#36393F")
        .addRect(169, 26, 231, 46)
        .addRect(224, 108, 176, 46)
        .setShadowColor('rgba(22, 22, 22, 1)')
        .setShadowOffsetY(5)
        .setShadowBlur(10)
        .addCircle(84, 90, 62)
        .addCircularImage(avatar, 85, 90, 64)
        .save()
        .createBeveledClip(10, 139, 150, 30, 0)
        .setColor('#36393F')
        .fill()
        .restore()
        .setTextAlign('center')
        .setTextFont('16pt Heroes')
        .setColor('#FFFFFF')
        .addText(name, 285, 54)
        .addText(`Level: ${exports.level}`, 84, 157)
        .setTextAlign('left')
        .addText(`XP: ${kFormatter(exports.xp)}`, 241, 136)
        .toBuffer();
}
async function profileGold(message, database) {
    const member = message.member;

    database.query(`SELECT * FROM servers_xp WHERE guildid=${message.guild.id} AND userid=${message.author.id}`, function (error, results, fields) {
        if (error) {
            return false;
        } else if (results.length > 0) {
            exports.level = results[0].level;
            exports.xp = results[0].xp;
            exports.maxXp = results[0].level * 150 + results[0].level * 35;
        } else {

        }
    });

    const result = await fetch(member.user.displayAvatarURL({format: 'png'}));
    if (!result.ok) new Error('Failed to get the avatar!');
    const avatar = await result.buffer();

    const name = member.displayName.length > 9 ? member.displayName.substring(0, 17) + '...'
        : member.displayName;

    return new Canvas(400, 180)
        .addImage(path.join(`database/users/backgrounds/${message.author.id}.png`), 84, 0, 316, 180)
        .setColor("#36393F")
        .addRect(169, 26, 231, 46)
        .addRect(224, 108, 176, 46)
        .setShadowColor('rgba(22, 22, 22, 1)')
        .setShadowOffsetY(5)
        .setShadowBlur(10)
        .addCircle(84, 90, 62)
        .addCircularImage(avatar, 85, 90, 64)
        .save()
        .createBeveledClip(10, 139, 150, 30, 0)
        .setColor('#36393F')
        .fill()
        .restore()
        .setTextAlign('center')
        .setTextFont('16pt Heroes')
        .setColor('#FFFFFF')
        .addText(name, 285, 54)
        .addText(`Level: ${exports.level}`, 84, 157)
        .setTextAlign('left')
        .addText(`XP: ${kFormatter(exports.xp)}`, 241, 136)
        .toBuffer();
}

function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}

exports.help = {
    name: 'level',
};