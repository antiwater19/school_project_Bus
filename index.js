const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors()); //충돌나고 있었음
const Conco = require('./Config.json');
const Maping = require('./BusLocal.json');

const { Client, IntentsBitField, AttachmentBuilder, Collection } = require('discord.js');
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

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  console.log(interaction.commandName);
  if(interaction.commandName === 'hey'){
    interaction.reply('hey!');
  } else if(interaction.commandName === 'ping'){
    interaction.reply('Pong!');
  }
});


client.on('messageCreate', (message) =>{
  console.log(message.content);
  if(message.content === "bus"){

    var convert = require('xml-js');
    var request = require('request');

    var url = 'http://ws.bus.go.kr/api/rest/buspos/getBusPosByVehId';
    var queryParams = '?' + encodeURIComponent('serviceKey') + '=9mTk0/xkXqrLmNNHjWBa/1miAzFFB9rxSS7KKuTq3FtOvlxeXCNHt6ix0GJvj/oEUnQdzxqBr0fuGEHQ1uARSQ=='; //서비스키인증
    queryParams += '&' + encodeURIComponent('vehId') + '=' + encodeURIComponent('100000001'); /* */
    
    
    request({
      url: url + queryParams,
      method: 'GET'
    }, function (error, response, body) {
      
      //기본 code
      //console.log('서버응답 200이면 성공임'); 
      //console.log('Status', response.statusCode);
      //console.log('Headers', JSON.stringify(response.headers));
      //console.log('Reponse received', JSON.stringify(body));
      // body 가 xml파일임
      //const myJson = JSON.stringify(body);

      //xml2json을 이용한 파일 변환 
      const result = convert.xml2json(body, {
        compact: true,
        spaces: 3,
      }); 
      
      const myJson = JSON.stringify(result);
      
      //message.reply(`버스 출력 값 = ${JSON.stringify(body)}`);
      console.log('active');
      const resultObject = JSON.parse(result);
      console.log(resultObject.ServiceResult.msgHeader.headerMsg._text);
      message.reply(`결과메시지 ${resultObject.ServiceResult.msgHeader.headerMsg._text} 
       저상버스(1이면 저상버스 0이면 no): ${resultObject.ServiceResult.msgBody.itemList.busType._text}
       버스ID: ${resultObject.ServiceResult.msgBody.itemList.vehId._text}
       정류소고유ID: ${resultObject.ServiceResult.msgBody.itemList.stId._text}
       최종정류소고유ID: ${resultObject.ServiceResult.msgBody.itemList.lastStnId._text}
       버스차량번호: ${resultObject.ServiceResult.msgBody.itemList.plainNo._text}
       맵매칭GRS80 버스위치x좌표: ${resultObject.ServiceResult.msgBody.itemList.posX._text}
       맵매칭GRS80 버스위치y좌표: ${resultObject.ServiceResult.msgBody.itemList.posY._text}
       정류소도착여부: ${resultObject.ServiceResult.msgBody.itemList.stopFlag._text}
       맵배칭WGS84 버스위치x좌표: ${resultObject.ServiceResult.msgBody.itemList.tmX._text}
       맵배칭WGS84 버스위치y좌표: ${resultObject.ServiceResult.msgBody.itemList.tmY._text}`);
        
       // Maping이 BusLocal.json파일을 가리킨다.
       console.log(`요거 데이터: ${Maping.DATA[1].stop_nm}`);

    });
    
    
  }
});


client.login(Conco.token);