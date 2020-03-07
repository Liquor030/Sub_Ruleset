let body= $response.body;
var obj = JSON.parse(body);
if (body.indexOf("expires") !=-1) {
  obj["receipt"]["in_app"][0]["original_purchase_date"] = "2021-03-07 15:39:19 Etc/GMT";
  obj["receipt"]["in_app"][0]["original_purchase_date_ms"] = "1615131559";
  obj["receipt"]["in_app"][0]["original_purchase_date_pst"] = "2020-03-07 08:39:19 America/Los_Angeles";
  obj["receipt"]["in_app"][0]["expires_date"] = "2099-10-19 05:14:18 Etc/GMT";
  obj["receipt"]["in_app"][0]["expires_date_pst"] = "2099-10-18 22:14:18 America/Los_Angeles";
  obj["receipt"]["in_app"][0]["expires_date_ms"] = "4096019658000";
  obj["latest_receipt_info"][0]["expires_date"] = "2099-10-19 05:14:18 Etc/GMT";
  obj["latest_receipt_info"][0]["expires_date_pst"] = "2099-10-18 22:14:18 America/Los_Angeles";
  obj["latest_receipt_info"][0]["expires_date_ms"] = "4096019658000";
  }
$done({body: JSON.stringify(obj)});
