/*Remove Douyu's Ad by Liquor030
[Script]
douyu.js = type=http-response,pattern=^https?:\/\/rtbapi\.douyucdn\.cn,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Liquor030/Sub_Ruleset/master/Script/douyu.js,script-update-interval=0

[MITM]
hostname = rtbapi.douyucdn.cn
*/
$done({
    body:'{"error": 0,"data": []}'
  })