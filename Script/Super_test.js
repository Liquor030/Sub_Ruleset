var body = $response.body.replace(/{\"cell_type\":2.*?live_info\":null},?/g,'');
$done({body});
