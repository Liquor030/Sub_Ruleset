/*
[Script]
http-response ^https?:\/\/.+\.(snssdk|amemv)\.com\/api\/ad\/ script-path= https://raw.githubusercontent.com/Liquor030/Sub_Ruleset/master/Script/snssdk.js,requires-body=true

[MITM]
hostname = *.snssdk.com
*/
var body = '{"data":null,"code":0,"message":"success"}';
$done({body});
