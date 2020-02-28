var body = $response.body;
var url = $request.url;
const path = "/pay/balance";
let obj = JSON.parse(body);
if (url.indexOf(path) != -1) {
  obj["balance"] = 200;
  obj["giftBalance"] = 100;
  obj["peerBalance"] = 100;
  body = JSON.stringify(obj);
 }
$done({body});
