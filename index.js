/* NodeJs 12 샘플 코드 */
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

console.log('실행됬음');
console.log('');

/* NodeJs 12 샘플 코드 */

var request = require('request');

var url = 'http://ws.bus.go.kr/api/rest/buspos/getBusPosByVehId';
var queryParams = '?' + encodeURIComponent('serviceKey') + '서비스키'; /* Service Key*/
queryParams += '&' + encodeURIComponent('vehId') + '=' + encodeURIComponent('버스차량ID'); /* */

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