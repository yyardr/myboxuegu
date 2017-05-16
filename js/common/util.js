define(['jquery','jquery_cookie'], function ($,ud) {
    return {
        //其他页面检测是否登录
        checkLoginStatus: function () {
            if (!$.cookie('PHPSESSID')){
                location.href = '/html/home/login.html'
            }
        },
        //页面发起ajax请求，产生loading效果
        loading: function () {
            $(document).on('ajaxStart', function () {
                $(".overlay").show();
            }).on('ajaxStop', function () {
                $(".overlay").hide();
            })
        }
    }
})