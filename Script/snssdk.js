/* 去除头条系(/api/ad)  by: Liquor030
[Script]
http-response ^https?:\/\/.+\.(snssdk|amemv)\.com\/api\/ad\/ script-path= https://raw.githubusercontent.com/Liquor030/Sub_Ruleset/master/Script/snssdk.js

[MITM]
hostname = *.snssdk.com
*/
var data = {
  body: "{"data":null,"code":0,"message":"success"}",
  headers: {
    "Content-Type": "application/json"
  }
};
$done({response: data});
