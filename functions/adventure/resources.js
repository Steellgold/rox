const Discord = require('discord.js');
const { client, botConfg, fs, colors, database, msg} = require("../../rox");

exports.addStone = async(userid, enA, enB, database) => {
    let e = parseInt(enA) + parseInt(enB);
    const sql = `UPDATE adventure SET stone = '${e}' WHERE userid = '${userid}'`;
    database.query(sql, function (err) {
        if (err) throw err;
    });
}

exports.addIron = async(userid, enA, enB, database) => {
    let e = parseInt(enA) + parseInt(enB);
    const sql = `UPDATE adventure SET iron = '${e}' WHERE userid = '${userid}'`;
    database.query(sql, function (err) {
        if (err) throw err;
    });
}

exports.addGold = async(userid, enA, enB, database) => {
    let e = parseInt(enA) + parseInt(enB);
    const sql = `UPDATE adventure SET gold = '${e}' WHERE userid = '${userid}'`;
    database.query(sql, function (err) {
        if (err) throw err;
    });
}

exports.addObsidian = async(userid, enA, enB, database) => {
    let e = parseInt(enA) + parseInt(enB);
    const sql = `UPDATE adventure SET obsidian = '${e}' WHERE userid = '${userid}'`;
    database.query(sql, function (err) {
        if (err) throw err;
    });
}

exports.addWood = async(userid, enA, enB, database) => {
    let e = parseInt(enA) + parseInt(enB);
    const sql = `UPDATE adventure SET wood = '${e}' WHERE userid = '${userid}'`;
    database.query(sql, function (err) {
        if (err) throw err;
    });
}

exports.removeStone = async(userid, enA, enB, database) => {
    let e = parseInt(enA) - parseInt(enB);
    const sql = `UPDATE adventure SET stone = '${e}' WHERE userid = '${userid}'`;
    database.query(sql, function (err) {
        if (err) throw err;
    });
}

exports.removeIron = async(userid, enA, enB, database) => {
    let e = parseInt(enA) - parseInt(enB);
    const sql = `UPDATE adventure SET iron = '${e}' WHERE userid = '${userid}'`;
    database.query(sql, function (err) {
        if (err) throw err;
    });
}

exports.removeGold = async(userid, enA, enB, database) => {
    let e = parseInt(enA) - parseInt(enB);
    const sql = `UPDATE adventure SET gold = '${e}' WHERE userid = '${userid}'`;
    database.query(sql, function (err) {
        if (err) throw err;
    });
}

exports.removeObsidian = async(userid, enA, enB, database) => {
    let e = parseInt(enA) - parseInt(enB);
    const sql = `UPDATE adventure SET obsidian = '${e}' WHERE userid = '${userid}'`;
    database.query(sql, function (err) {
        if (err) throw err;
    });
}

exports.removeWood = async(userid, enA, enB, database) => {
    let e = parseInt(enA) - parseInt(enB);
    const sql = `UPDATE adventure SET wood = '${e}' WHERE userid = '${userid}'`;
    database.query(sql, function (err) {
        if (err) throw err;
    });
}