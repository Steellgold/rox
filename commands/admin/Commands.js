const Discord = require("discord.js");
const { client, database, msg, colors, fs} = require("../../rox");
const langs = ["fr","en","es"]
module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if (await msg.Role(message.member, "admin", message, dataServer) === true || message.member.hasPermission('ADMINISTRATOR')) {

        if (!args[0]) {
            return await msg.sendMsg("INVALID_ARGS_COMMANDS", message, dataServer)
        }

        let dbC = JSON.parse(fs.readFileSync("database/ccommands/" + message.guild.id + ".json", "utf8"));
        switch (args[0]) {
            case "add":
                if (Object.keys(dbC).includes(args[1])) {
                    return await msg.sendMsgA(language("COMMAND_ALREADY_EXIST", dataServer.prefix, args[1]), message, dataServer)
                }

                if(dataServer.isGold !== 1){
                    if(Object.keys(dbC).length >= dataServer.limitCC){
                        return await msg.sendMsgA(language("COMMAND_REACHED_MAXIMUM", dataServer.prefix, args[1]), message, dataServer)
                    }
                }

                if (!args[2]) {
                    return await msg.sendMsg("INVALID_ARGS_TEXT_COMMANDS", message, dataServer)
                }

                await update("add",args[1],args.slice(2).join(" "),message.guild.id);
                await msg.sendMsg("UPDATED", message, dataServer);
                break;
            case "remove":
                if (!Object.keys(dbC).includes(args[1])) {
                    return await msg.sendMsgA(language("COMMAND_NOT_EXIST", dataServer.prefix, args[1]), message, dataServer)
                }

                await update("remove", args[1]," ",message.guild.id);
                await msg.sendMsg("UPDATED", message, dataServer);
                break;
            case "update":
                if (!Object.keys(dbC).includes(args[1])) {
                    return await msg.sendMsgA(language("COMMAND_NOT_EXIST", dataServer.prefix, args[1]), message, dataServer)
                }

                if (!args[2]) {
                    return await msg.sendMsg("INVALID_ARGS_TEXT_COMMANDS", message, dataServer)
                }

                await update("update", args[1], args.slice(2).join(" "),message.guild.id);
                await msg.sendMsg("UPDATED", message, dataServer);
                break;
            default:
                await msg.sendMsg("INVALID_ARGS_CHANNELS", message, dataServer)
        }
    }else{
        return await msg.sendMsg("PERMISSION_DENIED", message, dataServer);
    }
}

async function update(type, name, text = null, id){
    let dbC = JSON.parse(fs.readFileSync("database/ccommands/" + id + ".json", "utf8"));

    switch (type) {
        case "add":
            dbC[name] = text;
            fs.writeFileSync("database/ccommands/" + id + ".json", JSON.stringify(dbC), "utf-8");
            break;

        case "remove":
            delete dbC[name];
            fs.writeFileSync("database/ccommands/" + id + ".json", JSON.stringify(dbC), "utf-8");
            break;

        case "update":
            dbC[name] = text;
            fs.writeFileSync("database/ccommands/" + id + ".json", JSON.stringify(dbC), "utf-8");
            break;
    }
}

exports.help = {
    name: "commands",
}