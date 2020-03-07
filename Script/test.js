let body= $response.body;
var obj = JSON.parse(body);
if (body.indexOf("expires") !=-1) {
  obj["receipt"]["in_app"][0]["original_purchase_date"] = "2020-03-07 13:03:50 Etc/GMT";
  obj["receipt"]["in_app"][0]["original_purchase_date_ms"] = "1583586230";
  obj["receipt"]["in_app"][0]["original_purchase_date_pst"] = "2020-03-07 06:03:50 America/Los_Angeles";
  obj["receipt"]["in_app"][0]["expires_date"] = "2099-10-19 05:14:18 Etc/GMT";
  obj["receipt"]["in_app"][0]["expires_date_pst"] = "2099-10-18 22:14:18 America/Los_Angeles";
  obj["receipt"]["in_app"][0]["expires_date_ms"] = "4096019658000";
  obj["latest_receipt_info"][0]["expires_date"] = "2099-10-19 05:14:18 Etc/GMT";
  obj["latest_receipt_info"][0]["expires_date_pst"] = "2099-10-18 22:14:18 America/Los_Angeles";
  obj["latest_receipt_info"][0]["expires_date_ms"] = "4096019658000";
  }
$done({body: JSON.stringify(obj)});
