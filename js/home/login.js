define(['bootstrap','jquery','jquery_form','jquery_cookie','nprogress','util'], function (ud,$,ud,ud,nprogress,util) {
    //配置网站进度条
    nprogress.start();
    $(function () {
        nprogress.done();
    })
    //登录框
    $("#login-form").ajaxForm({
        success: function (data) {
            $.cookie('userInfo',JSON.stringify(data.result),{path:'/'})
            location.href = '/';
        },
        error: function () {
            alert('登录失败！！')
        }
    });
    //检测登录状态
    if ($.cookie('PHPSESSID')){
        location.href = '/';
    };
    // 配置ajax请求的loading
    var returns = util({
        'loading':[]
    });
})