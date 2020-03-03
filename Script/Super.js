/*修复版
[Script]
http-response ^https?://[a-z]*\.snssdk\.com/bds/feed/stream/ requires-body=1,max-size=-1,script-path=https://Choler.github.io/Surge/Script/Super.js

[MITM]
hostname = *.snssdk.com
*/
var body = $response.body;
var obj = JSON.parse(body);
if (obj.data.data) {
  for (var i = obj.data.data.length - 1; i >= 0; i--) {
    if (obj.data.data[i].ad_info != null) {
      obj.data.data.splice(i, 1);
    }
  }
}
var obj2 = JSON.stringify(obj);
var new_response = obj2.replace(/\"cell_id\":\d+,\"cell_id_str\":\"(\d+)\"/g,'\"cell_id\":$1,\"cell_id_str\":\"$1\"');
$done({body});
