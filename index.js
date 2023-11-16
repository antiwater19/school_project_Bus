const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors()); //충돌나고 있었음
const Conco = require('./Config.json');
const MatchD = require('./BusLocal.json');

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


client.on('messageCreate', (message) =>{
  console.log(message.content);
  if(message.content === "bus"){

    var convert = require('xml-js');
    var request = require('request');

    var url = 'http://ws.bus.go.kr/api/rest/buspos/getBusPosByVehId';
    var queryParams = '?' + encodeURIComponent('serviceKey') + '=9mTk0/xkXqrLmNNHjWBa/1miAzFFB9rxSS7KKuTq3FtOvlxeXCNHt6ix0GJvj/oEUnQdzxqBr0fuGEHQ1uARSQ=='; //서비스키인증
    queryParams += '&' + encodeURIComponent('vehId') + '=' + encodeURIComponent('108045036'); /* */
    
    
    request({
      url: url + queryParams,
      method: 'GET'
    }, function (error, response, body) {
      /*
      console.log('서버응답 200이면 성공임');
      console.log('Status', response.statusCode);
      console.log('응답 헤더');
      console.log('Headers', JSON.stringify(response.headers));
      console.log('');
      console.log('Reponse received', JSON.stringify(body));
      console.log('');
      */
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
      \n 저상버스(1이면 yes 0이면 no): ${resultObject.ServiceResult.msgBody.itemList.busType._text}
      \n `);
    });
    
    
  }
});

/*
const xmlDocument = new DOMParser().parseFromString(body, "text/xml");
            console.log(xmlDocument);
            const itemList = xmlDocument.querySelectorAll("plainNo");

            for(const plainNo of itemList){
            const id = plainNo.querySelector("id").textContent;
            const title = plainNo.querySelector("title").textContent;
              
             console.log(id, title);
             }
*/

client.login(Conco.token);