define(['bootstrap', 'aside', 'header', 'util', 'template','jquery_form','jquery_uploadify','jquery'], function (ud, ud, ud, util, template,ud,ud,$) {
    var returns = util({
        'checkLoginStatus': [],
        'loading': [],
        'getSearch':['cs_id']

    });
    /*课程编辑页面*/
    /*课时列表数据回显*/
    var cs_id = returns.getSearch;
    $.get('/v6/course/lesson',{cs_id:cs_id}, function (data) {
        $(".steps").html(template('step3-tpl',data.result));
    })
    /*点击编辑时，模态框数据回显*/
    $(document).on('click','.btn-ct-edit,#ct-add', function () {
        var ct_id = $(this).attr('data-ct-id');
        if (ct_id){
            $.get('/v6/course/chapter/edit',{ct_id:ct_id}, function (data) {
                data.result.action = '/v6/course/chapter/modify'
                $("#chapterModal").html(template('model-tpl',data.result));
            });

        }else{
            $("#chapterModal").html(template('model-tpl',{action:'/v6/course/chapter/add'}));

        }

    })

    /*点击添加按钮，提交*/
    $(document).on('click','#btn-ct-add', function () {
        $("#ct-add-form").ajaxSubmit({
            data:{
                ct_id:$(this).attr('data-ct-id') ,
                ct_cs_id:cs_id,
                ct_is_free:$("#checkbox-is-free").prop("checked") ? 1 : 0,
            },
            success: function () {
                location.reload();
            }
        })
    })


})
