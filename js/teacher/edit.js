define(['aside','header','util','template','jquery_form','jquery'], function (ud,ud,util,template,ud,$) {
    var returns = util({
        'checkLoginStatus':[],
        'loading':[],
        'getSearch':['tc_id']
    });

    //讲师编辑页面
    var tc_id = returns.getSearch;
    $.get('/v6/teacher/edit',{tc_id:tc_id}, function (data) {
        $(".teacher-edit").append(template('tc-edit-tpl',data.result));
        $("#tc-edit-btn").on('click', function (e) {
            e.preventDefault();
            $(".teacher-edit form").ajaxSubmit({
                data:{tc_id:tc_id},
                success: function () {
                    location.href = './list.html'
                }
            });
            return false;
        })
    })
})