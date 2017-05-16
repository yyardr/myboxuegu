define(['aside','header','util','jquery_form'], function (ud,ud,util,ud) {

    var returns = util({
        'checkLoginStatus':[],
        'loading':[]
    });
    //点击添加按钮，表单转ajax提交，成功后跳转到讲师列表
    $(".teacher-add form").ajaxForm(function () {
        location.href = '/html/teacher/list.html'

    })
})