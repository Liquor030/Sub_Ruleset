/* 作者：Kaname
使用方法：
1.[Script]分组下添加下面两行配置
http-request https:\/\/ios\.prod\.ftl\.netflix\.com\/iosui\/user\/.*path=%5B%22videos%22%2C%[0-9]+%22%2C%22summary%22%5D&pathFormat.* script-path=https://raw.githubusercontent.com/ikanam/Surge-Scripts/master/netflixratings.js
http-response https:\/\/ios\.prod\.ftl\.netflix\.com\/iosui\/user\/.*path=%5B%22videos%22%2C%[0-9]+%22%2C%22summary%22%5D&pathFormat.* requires-body=1, script-path=https://raw.githubusercontent.com/ikanam/Surge-Scripts/master/netflixratings.js
2.[MITM]分组添加hostname = ios.prod.ftl.netflix.com
3.IMDb分数将显示在详情页的封面下方。
4.因为获取分数的API对中文标题支持不好,所以修改了request,针对该接口返回英文信息,所以可能界面部分信息会变成英文。
5.API每日有1000次请求限制，如果超出限制请自己申请APIKey替换.(http://www.omdbapi.com/apikey.aspx)
*/
if ($request.headers != undefined) {
    var url = $request.url;
    url = url.replace(/&languages=zh-.{2,4}&/g, "&languages=en-US&")
    $done({url});
} else {
    var body = $response.body;
    let bodyObject = JSON.parse(body);
    let movieID = bodyObject.paths[0][1];
    let title = bodyObject.value.videos[movieID].summary.title;
    let requestURL = `http://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=8ba64f10`;
    $httpClient.get(requestURL, function(error, response, data) {
        if (error){
            $done({});                   
        } else {
            var obj = JSON.parse(data);
            if (obj.Error) {
                $done({});                   
            } else {
                let supplementalMessage = bodyObject.value.videos[movieID].summary.supplementalMessage;
                if (supplementalMessage != undefined) {
                    bodyObject.value.videos[movieID].summary.supplementalMessage = `IMDb Rating: ${obj.imdbRating}  IMDb Votes: ${obj.imdbVotes}\n` + supplementalMessage;
                } else {
                    bodyObject.value.videos[movieID].summary.supplementalMessage = `IMDb Rating: ${obj.imdbRating}  IMDb Votes: ${obj.imdbVotes}`;
                }
                body = JSON.stringify(bodyObject);
                $done({body});
            }
        }
    });
}
