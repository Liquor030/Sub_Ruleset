/*by Liquor remove Super's ad & logo
[Script]
http-response ^https?://.*\.snssdk\.com/bds/feed/stream/ requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/Liquor030/Sub_Ruleset/master/Script/Super.js
[MITM]
hostname = *.snssdk.com
*/
var obj = $response.body.replace(/:(\d{19})/g, ':\"$1str\"');
obj = JSON.parse(obj);
var c;
if (obj.data.data) {
    c = obj.data.data;
} else if (obj.data.replies) {
    c = obj.data.replies;
} else if (obj.data.cell_comments) {
    c = obj.data.cell_comments;
} else {
    c = null;
}

if (c instanceof Array) {
    if (c != null) {
        for (var i in c) {
            if (c[i].ad_info != null) {
                c.splice(i, 1);
            }
            if (c[i].item != null) {
                if (c[i].item.video != null) {
                    c[i].item.video.video_download.url_list = c[i].item.origin_video_download.url_list;
                }
                for (var j in c[i].item.comments) {
                    if (c[i].item.comments[j].video != null) {
                        c[i].item.comments[j].video_download.url_list = c[i].item.comments[j].video.url_list;
                    }
                }
            }
            if (c[i].comment_info != null) {
                if (c[i].comment_info.video != null) {
                    c[i].comment_info.video_download.url_list = c[i].comment_info.video.url_list;
                }
            }
        }
    }
} else {
    if (c.comment_info != null) {
        if (c.item != null) {
            if (c.item.video != null) {
                c.item.video.video_download.url_list = c.item.origin_video_download.url_list;
            }
            for (var j in c.item.comments) {
                if (c.item.comments[j].video != null) {
                    c.item.comments[j].video_download.url_list = c.item.comments[j].video.url_list;
                }
            }
        }
        if (c.comment_info.video != null) {
            c.comment_info.video_download.url_list = c.comment_info.video.url_list;
        }
    }
}
obj = JSON.stringify(obj);
obj = obj.replace(/:\"(\d{19})str\"/g, ':$1');
obj = obj.replace(/\"can_download\":false/g, '\"can_download\":true');
obj = obj.replace(/tplv-ppx-logo.image/g, '0x0.gif');
var body = obj.replace(/tplv-ppx-logo/g, '0x0');
$done({body});
