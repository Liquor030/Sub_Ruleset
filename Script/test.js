/*去水印测试
[Script]
http-response ^https?://.*\.snssdk\.com/bds/feed/stream/ requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/Liquor030/Sub_Ruleset/master/Script/Super.js
[MITM]
hostname = *.snssdk.com
*/
var obj = $response.body.replace(/{\"cell_type\":2.*?_info\":null},?/g,'');
obj = obj.replace(/\"can_download\":(false|null)/g,'\"can_download\":true');
obj = obj.replace(/(\"video_download\":.*?\"url_list\":\[)(.*?)(\].*?\"video_high\":.*?\"url_list\":\[)(.*?)(\])/g,'$1$4$3$4$5');
obj = obj.replace(/tplv-ppx-logo.image/g,'0x0.gif');
var body = obj.replace(/tplv-ppx-logo/g,'0x0');
$done({body});
