var body = $response.body;
const path1 = "/pay/memberCardSummary";
const path2 = "/incentive/cancelFirstCharge";
var path = $request.path;
function modify_card() {
  let obj = JSON.parse(body);
  obj["expired"] = 0;
	obj["expiredTime"] = 1591804799;
	obj["remainTime"] = 86313600;
	body = JSON.stringify(obj);
}

function modify_balance() {
  let obj = JSON.parse(body);
  obj["hasCancelPayIncentive"] = 1;
  obj["sentChapterCount"] = 3;
  obj["chance"] = 1;
  body = JSON.stringify(obj);
   }
   
if (path.indexOf(path1) != -1){
  modify_card();
}
if (path.indexOf(path2) != -1 ){
  modify_balance();
}
$done(body);
