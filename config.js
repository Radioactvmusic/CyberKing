/* Copyright (C) 2022

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });


function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './whatsasena.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    VERSION: 'v4.0.2 Public Stable',
    SESSION: process.env._CYBER_SESSION === undefined ? '' : process.env._CYBER_SESSION,
    ANTILINK: process.env.ANTI_LINK === undefined ? 'true' : process.env.ANTI_LINK,
    INBO: process.env.INBO_BLOCK === undefined ? 'false' : process.env.INBO_BLOCK,
    Bad_Word: process.env.BAD_KICK === undefined ? 'true' : process.env.BAD_KICK,
    GANSTYLE: process.env.GAN_IMAGE === undefined ? 'https://telegra.ph/file/24cacd9938446a38180fd.png' : process.env.GAN_IMAGE,
    LANG: process.env.LANGUAGE === undefined ? 'TR' : process.env.LANGUAGE.toUpperCase(),
    ALIVEMSG: process.env.ALIVE_MESSAGE === undefined ? 'default' : process.env.ALIVE_MESSAGE,
    ALIVE_LOGO: process.env.ALIVE_LOGO === undefined ? 'https://telegra.ph/file/43a15356c3c401a129484.jpg' : process.env.ALIVE_LOGO,
    KICKMEMSG: process.env.KICKME_MESSAGE === undefined ? 'default' : process.env.KICKME_MESSAGE,
    MUTEMSG: process.env.MUTE_MESSAGE === undefined ? 'default' : process.env.MUTE_MESSAGE,
    BLOCKMSG: process.env.BLOCK_MESSAGE === undefined ? 'default' : process.env.BLOCK_MESSAGE,
    BLOCKCHAT: process.env.BLOCK_CHAT === undefined ? false : process.env.BLOCK_CHAT,
    UNMUTEMSG: process.env.UNMUTE_MESSAGE === undefined ? 'default' : process.env.UNMUTE_MESSAGE,
    WORKTYPE: process.env.WORK_TYPE === undefined ? 'public' : process.env.WORK_TYPE,
    PROMOTEMSG: process.env.PROMOTE_MESSAGE === undefined ? 'default' : process.env.PROMOTE_MESSAGE,
    DEMOTEMSG: process.env.DEMOTE_MESSAGE === undefined ? 'default' : process.env.DEMOTE_MESSAGE,
    BANMSG: process.env.BAN_MESSAGE === undefined ? 'default' : process.env.BAN_MESSAGE,
    AFKMSG: process.env.AFK_MESSAGE === undefined ? 'default' : process.env.AFK_MESSAGE,
    HANDLERS: process.env.HANDLERS === undefined ? '^[.!;]' : process.env.HANDLERS,
    CUS_PANEL: process.env.CUS_PANEL === undefined ? 'ck' : process.env.CUS_PANEL,
    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    BRANCH: 'main',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './whatsasena.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    RBG_API_KEY: process.env.REMOVE_BG_API_KEY === undefined ? false : process.env.REMOVE_BG_API_KEY,
    NO_ONLINE: process.env.NO_ONLINE === undefined ? true : convertToBool(process.env.NO_ONLINE),
    SUDO: process.env.SUDO === undefined ? false : process.env.SUDO,
    OWN: process.env.OWN === undefined ? '94752279625,0' : process.env.OWN,
    OWN2: process.env.OWN2 === undefined ? '94717242063,0' : process.env.OWN2,
    OWN3: process.env.OWN3 === undefined ? '94712935702,0' : process.env.OWN3,
    OWN4: process.env.OWN4 === undefined ? '94742599625,0' : process.env.OWN4,
    OWN5: process.env.OWN5 === undefined ? '94770029091,0' : process.env.OWN5,
    OWN6: process.env.OWN6 === undefined ? '94711176747,0' : process.env.OWN6,
    DEBUG: DEBUG,
    COFFEEHOUSE_API_KEY: process.env.COFFEEHOUSE_API_KEY === undefined ? false : process.env.COFFEEHOUSE_API_KEY,
    WITAI_API: "TEYMELA6DMC4XB5YM3SPTTQWUUIBKURG",
    CQSUPPORT1: "94784621232-1635496328",
    CQSUPPORT2: "94711176745",
    CYBERKING1: "380946264670-1635685193",
    CYBERKING2: "94711176746",
    AMDANIWASA: "393475528094-1415817281",
    AMDISUPPORT1: "94757405652-1631633729",
    AMDISUPPORT2: "94757405652-1631905677",
    NAGRP: "972542559113-1376904403",
    RRBSEW: "94785435462-1625490851",
    RRDSEW: "94776785357-1626432386",
    RRESEW: "94776785357-1626521320",
    SEWSUPPORT: "94785435462-1627812354",
    SEWSUPPORT2: "94785435462-1628835469",
    SEWSUPPORT3: "94785435462-1628835633",
    CQSUPPORT2: "94711176746"
}; 
