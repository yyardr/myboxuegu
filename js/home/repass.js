define(['aside','header','util','jquery_form','jquery'], function (ud,ud,util,ud,$) {
    var returns = util({
        'checkLoginStatus':[],
        'loading':[]
    });
    $(".repass form").on('submit', function (e) {
        e.preventDefault();

        if ($("#password").val()===$("#okPassword").val()){
            $(this).ajaxSubmit(function () {
                $("#logout").trigger('click')
            })
        }else{
            alert('新密码与确认密码不一致')
        }

        return false
    })
})