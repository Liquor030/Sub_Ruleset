var obj = $response.body.replace(/{\"cell_type\":2.*?_info\":null},?/g,'');
var body = obj.replace(/(\"video_download\":.*?\"url_list\":\[)(.*?)(\].*?\"video_high\":.*?\"url_list\":\[)(.*?)(\])/g,'$1$4$3$4$5');
$done({body});
