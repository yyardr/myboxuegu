define(['bootstrap', 'aside', 'header', 'util', 'template'], function (ud, ud, ud, util, template) {
    var returns = util({
        'checkLoginStatus': [],
        'loading': []
    });

    /*
     * 讲师列表渲染
     * */
    //模板引擎的过滤器，获取讲师列表中的年龄
    template.helper('age', function (tplValue) {
        if (!tplValue) {
            return '';
        }
        var birthday = tplValue.slice(0, 4);
        var currentYear = new Date().getFullYear();
        return currentYear - birthday;
    })
    $.get('/v6/teacher', function (data) {
        $("#tc-list-table tbody").append(template('tc-list-tpl', data))
    })
    //讲师详情渲染
    $(document).on('click', 'a[href="#teacherModal"]', function () {
        var data_tc_id = $(this).attr('data-tc-id');
        $.get('/v6/teacher/view', {tc_id: data_tc_id}, function (data) {
            $("#teacherModal").html(template('tc-view-tpl', data.result));
        })
    })
})