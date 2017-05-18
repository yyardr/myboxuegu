define(['aside','header','util','template','jquery_region','jquery_form','jquery'], function (ud,ud,util,template,ud,ud,$) {
    var returns = util({
        'checkLoginStatus':[],
        'loading':[]
    });
    /*个人中心数据回显*/
    $.get('/v6/teacher/profile', function (data) {
       var profileTpl = template('profile-tpl',data.result);
        $(".teacher-profile").html(profileTpl);
        profileSubmit();
        initPCD();
    });
    /*点击保存按钮，提交请求函数*/
    function profileSubmit(){
        $(document).on('click','#btn-profile-save', function () {
            $(".settings form").ajaxSubmit({
                data:{
                    tc_hometown:$("#p").find(':selected').text()+'|'+$("#c").find(':selected').text()+'|'+$("#d").find(':selected').text(),
                    tc_province:$("#p").val(),
                    tc_city    :$("#c").val(),
                    tc_district:$("#d").val(),
                },
                success: function () {
                    location.reload();
                }
            })
        })

    }
    /*省市县三级联动初始化函数*/
    function initPCD() {
        $('#tc-region').region({
            url: '/lib/jquery-region/region.json'
        });
    };
    /*图片上传空间初始化*/

})