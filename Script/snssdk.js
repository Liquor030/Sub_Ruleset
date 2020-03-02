/*
[Script]
http-response ^https?:\/\/.+\.snssdk\.com\/api\/ad\/ script-path= https://raw.githubusercontent.com/Liquor030/Sub_Ruleset/master/Script/snssdk.js,requires-body=true

[MITM]
hostname = *.snssdk.com
*/
var body = $response.body;
var url = $request.url;
const path = "/api/ad";
if (url.indexOf(path) != -1) {
  body = '{"data":null,"code":20001,"message":"engine or sati no return ad"}';
 }
$done({body});
