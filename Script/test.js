/*by Liquor remove Super's ad/logo
[Script]
http-response ^https?://.*\.snssdk\.com/bds/(feed/stream|user/favorite) requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/Liquor030/Sub_Ruleset/master/Script/Super.js
[MITM]
hostname = *.snssdk.com
*/
var obj = $response.body.replace(/:(\d{19})/g,':\"$1str\"');
obj = JSON.parse(obj);
if (obj.data.data) {
    for (var i = obj.data.data.length - 1; i >= 0; i--) {
        if (obj.data.data[i].ad_info != null) {
            obj.data.data.splice(i, 1);
        }
        if (obj.data.data[i].item.video != null) {
            obj.data.data[i].item.video.video_download.url_list = obj.data.data[i].item.origin_video_download.url_list;
        }
        for (var j = obj.data.data[i].item.comments.length - 1; j >= 0; j--){
            if (obj.data.data[i].item.comments[j].video != null) {
                obj.data.data[i].item.comments[j].video_download.url_list = obj.data.data[i].item.comments[j].video.url_list;
            }
        }
    }
}
obj = JSON.stringify(obj);
obj = obj.replace(/:\"(\d{19})str\"/g,':$1');
obj = obj.replace(/\"can_download\":false/g,'\"can_download\":true');
obj = obj.replace(/tplv-ppx-logo.image/g,'0x0.gif');
var body = obj.replace(/tplv-ppx-logo/g,'0x0');
$done({body});
