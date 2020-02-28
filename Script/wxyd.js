var body = $response.body;
const path1 = "/pay/memberCardSummary";
const path2 = "/incentive/cancelFirstCharge";
var path = $request.path;
function modify_card() {
  let obj = JSON.parse(body);
  obj["expiredTime"] = 1594223999;
  obj["expired"] = 0;
  obj["remainTime"] = 1330440;
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
