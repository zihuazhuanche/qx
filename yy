#!请复制粘贴到surge本地模块或上传到GitHub仓库引用raw链接
#!name=音流@osinx
#!desc=永久解锁VIP
#!author=osinx
#!icon=https://raw.githubusercontent.com/osinx/Script/main/icon/streamMusic.png
#!homepage=https://github.com/osinx/Script

#！正确的恢复内购
#！购买会员-通过支付宝订单号恢复购买-任意输入确认即可

[Script]
音流解锁VIP = type=http-response, pattern=^https:\/\/pay\.aqzscn\.cn\/api\/v1\/payments\/, script-path=https://raw.githubusercontent.com/osinx/Script/main/vip/streamMusic.js, requires-body=true

[MITM]
hostname = %APPEND% pay.aqzscn.cn
