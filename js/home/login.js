define(['bootstrap','jquery','jquery_form'], function (ud,$,ud) {
    $("#login-form").ajaxForm({
        success: function () {
            location.href = '/';
        },
        error: function () {
            alert('登录失败！！')
        }
    })
})