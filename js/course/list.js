define(['bootstrap', 'aside', 'header', 'util', 'template','jquery'], function (ud, ud, ud, util, template,$) {
    var returns = util({
        'checkLoginStatus': [],
        'loading': []
    });
    /*课程列表渲染*/
    $.get('/v6/course', function (data) {
        $(".courses").append(template('course-list-tpl',data));
    })


})