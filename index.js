/* NodeJs 12 샘플 코드 */
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

console.log('실행됬음');
console.log('');

/* NodeJs 12 샘플 코드 */


/* NodeJs 12 샘플 코드 */


var request = require('request');

var url = 'http://ws.bus.go.kr/api/rest/buspos/getBusPosByVehId';
var queryParams = '?' + encodeURIComponent('serviceKey') + '=9mTk0/xkXqrLmNNHjWBa/1miAzFFB9rxSS7KKuTq3FtOvlxeXCNHt6ix0GJvj/oEUnQdzxqBr0fuGEHQ1uARSQ=='; /* Service Key*/
queryParams += '&' + encodeURIComponent('vehId') + '=' + encodeURIComponent('108045325'); /* */

request({
    url: url + queryParams,
    method: 'GET'
}, function (error, response, body) {
    console.log('Status', response.statusCode);
    console.log('');
    console.log('Headers', JSON.stringify(response.headers));
    console.log('');
    console.log('Reponse received', body);
    console.log('');
});