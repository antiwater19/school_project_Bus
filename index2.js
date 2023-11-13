//import cors from('cors'); //const cors = require("cors")
//app.use(cors());
                /*fetch('http://ws.bus.go.kr/api/rest/buspos/getBusPosByRtid?ServiceKey=9mTk0/xkXqrLmNNHjWBa/1miAzFFB9rxSS7KKuTq3FtOvlxeXCNHt6ix0GJvj/oEUnQdzxqBr0fuGEHQ1uARSQ==&busRouteId='+ 111033115) 
                .then((response) => response.json())
                .then((data) => {
                    document.getElementById("headerMsg").innerHTML = data['headerMsg'];
                });*/


var xhr = new XMLHttpRequest();
var url = 'http://ws.bus.go.kr/api/rest/buspos/getBusPosByVehId'; /*URL*/
var queryParams = '?' + encodeURIComponent('serviceKey') + '='+'서비스키'; /*Service Key*/
queryParams += '&' + encodeURIComponent('vehId') + '=108045325' + encodeURIComponent('111033115'); /**/
xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
    }
};

xhr.send('');