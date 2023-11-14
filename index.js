const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const Conco = require('./Config.json');

const { Client, GatewayIntentBits } = require('discord.js')
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
/*
const { Client, IntentsBitField, AttachmentBuilder } = require('discord.js');
//const context = require('./context');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});
*/


client.on('ready', (c) => {
    console.log(`Logged in as ${c.user.tag}!`);
  });

const msgLengthLimit = 2000;

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
  
    if (interaction.commandName === 'ping') {
      await interaction.reply('Pong!');
    }
  });

console.log('이거 실행됬음');
console.log('ㅇㅋ');

// NodeJs 12 샘플 코드 

var request = require('request');

var url = 'http://ws.bus.go.kr/api/rest/buspos/getBusPosByVehId';
var queryParams = '?' + encodeURIComponent('serviceKey') + '=9mTk0/xkXqrLmNNHjWBa/1miAzFFB9rxSS7KKuTq3FtOvlxeXCNHt6ix0GJvj/oEUnQdzxqBr0fuGEHQ1uARSQ=='; //서비스키인증
queryParams += '&' + encodeURIComponent('vehId') + '=' + encodeURIComponent('108045036'); /* */

request({
    url: url + queryParams,
    method: 'GET'
}, function (error, response, body) {
    console.log('Status', response.statusCode);
    console.log('');
    console.log('');
    console.log('Headers', JSON.stringify(response.headers));
    console.log('');
    console.log('');
    console.log('Reponse received', JSON.stringify(body));
    console.log('');
    console.log('구분짓기위한 한줄 띄움');
});


client.login(Conco.token);