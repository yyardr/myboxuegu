define(['bootstrap', 'aside', 'header', 'util', 'template','jquery_form','jquery'], function (ud, ud, ud, util, template,ud,$) {
    var returns = util({
        'checkLoginStatus': [],
        'loading': [],
        'getSearch':['cs_id']

    });
    /*课程编辑页面*/
        /*数据回显*/
    var cs_id = returns.getSearch;
    $.get('/v6/course/basic',{cs_id:cs_id}, function (data) {
        $("#cs-steps1").html(template('course-edit-tpl',data.result));
        /*数据保存提交*/
        $("#cs-steps1").ajaxForm({
            data:{
                cs_id:cs_id
            },
            success: function (data) {
                location.href = '/html/course/course_add_step2.html?cs_id='+data.result.cs_id;
            }
        });
    })

    /*课程二级联动*/

    $(document).on('change','#top-cg-select', function () {
        $.get('/v6/category/child',{cg_id:$(this).val()}, function (data) {
            var options = '';
            for(var i = 0; i < data.result.length; i++) {
                options +='<option value="'+data.result[i].cg_id+'">'+data.result[i].cg_name+'</option>';
            }
            $("#child-cg-select").html(options);
        })
    })

})