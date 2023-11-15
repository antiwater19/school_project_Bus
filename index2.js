const { Client, IntentsBitField, AttachmentBuilder, Collection } = require('discord.js');
const Conco = require('./Config.json');

const client = new Client({
    intents: [
      IntentsBitField.Flags.Guilds,
      IntentsBitField.Flags.GuildMembers,
      IntentsBitField.Flags.GuildMessages,
      IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log(`Logged in as ${c.user.tag}!`);
});
    
client.on('messageCreate', (message) =>{
    console.log(message.content);
} )

client.login(Conco.token);

/*
var xhr = new XMLHttpRequest();
var url = 'http://ws.bus.go.kr/api/rest/buspos/getBusPosByVehId'; //URL
var queryParams = '?' + encodeURIComponent('serviceKey') + '='+'서비스키'; //Service Key
queryParams += '&' + encodeURIComponent('vehId') + '=108045325' + encodeURIComponent('111033115'); 
xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
    }
};

xhr.send('');*/