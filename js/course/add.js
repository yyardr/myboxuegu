define(['bootstrap', 'aside', 'header', 'util', 'template','jquery_form','jquery'], function (ud, ud, ud, util, template,ud,$) {
    var returns = util({
        'checkLoginStatus': [],
        'loading': []
    });
    /*课程添加*/
    $("#course-create").ajaxForm(function (data) {
        location.href='/html/course/course_add_step1.html?cs_id='+data.result.cs_id;
    })


})