/*修复版
[Script]
http-response ^https?://.*\.snssdk\.com/bds/feed/stream/ requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/Liquor030/Sub_Ruleset/master/Script/Super.js

[MITM]
hostname = *.snssdk.com
*/
var obj = JSON.parse($response.body);
if (obj.data.data) {
  for (var i = obj.data.data.length - 1; i >= 0; i--) {
    if (obj.data.data[i].ad_info != null) {
      obj.data.data.splice(i, 1);
    }
  }
}
var obj2 = JSON.stringify(obj);
var obj3 = obj2.replace(/\"cell_id\":\d+,\"cell_id_str\":\"(\d+)\"/g,'\"cell_id\":$1,\"cell_id_str\":\"$1\"');
var body = obj3.replace(/\"item_id\":\d+,\"item_id_str\":\"(\d+)\"/g,'\"item_id\":$1,\"item_id_str\":\"$1\"');
$done({body});
