define(['jquery'], function ($) {
    $("#logout").on('click', function () {
        $.ajax({
            type:'post',
            url:'/v6/logout',
            success: function () {
                console.log(1);
                location.href = '/html/home/login.html';
            },
            error: function () {
                alert('网络超时，请稍后再试')
            }
        })
    })
});