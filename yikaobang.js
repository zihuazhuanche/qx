https://api.yikaobang.com.cn(\/user\/main\/vip|\/index.php\/activity\/main\/chapterLock)
url script-response-body
body = $response.body.replace(/is_vip":\d/g, 'is_vip":1').replace(/vip_deadline":\/g, 'vip_deadline":解锁成功');
$done({body});


body = $response.body.replace(/isVip":\w+/g, 'isVip":true').replace(/shell":\d+/g, 'shell":6666666');
$done({body});
body = $response.body.replace(/matchvalue/g, 'value')..replace(/matchvalue/g, 'value');
$done({body});

body = $response.body.replace(/is_vip":\d, 'is_vip":1').replace(/vip_deadline":\, 'vip_deadline":\解锁成功').replace(/pass":\d, 'pass":1');
$done({body});


https://api.imkuaida.com\/users\/findUserById
url script-response-body
body = $response.body.replace(/vip_end_time":\d+/g, 'vip_end_time":18000000000000').replace(/is_vip":0/g, 'is_vip":1');
$done({body});

