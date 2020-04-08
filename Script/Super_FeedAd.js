/* 去除皮皮虾feed_ad by: Liquor030
[Script]
http-response ^https?:\/\/.*\.snssdk\.com/bds/feed/stream/ requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/Liquor030/Sub_Ruleset/master/Script/Super.js

[MITM]
hostname = *.snssdk.com
*/
var body = $response.body.replace(/\{\"cell_type\":2.*?_info\":null\},?/g,'');
$done({body});
