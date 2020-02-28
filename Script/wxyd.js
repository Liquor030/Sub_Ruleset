var body = $response.body;
var url = $request.url;
const path = "/incentive/cancelFirstCharge";
let obj = JSON.parse(body);
if (url.indexOf(path) != -1) {
  obj["hasCancelPayIncentive"] = 1;
  obj["sentChapterCount"] = 3;
  obj["chance"] = 1;
	body = JSON.stringify(obj);
 }
$done({body});
