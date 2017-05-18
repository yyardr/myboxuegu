define(['bootstrap', 'aside', 'header', 'util', 'template','jquery_form','jquery_uploadify','jquery'], function (ud, ud, ud, util, template,ud,ud,$) {
    var returns = util({
        'checkLoginStatus': [],
        'loading': [],
        'getSearch':['cs_id']
    });
    /*课程编辑页面*/
    //添加按钮所需的缓存变量，存储第一次渲染时候的列表数据
    var result = null;
    var li = null;
    /*课时列表数据回显*/
    var cs_id = returns.getSearch;
    $.get('/v6/course/lesson',{cs_id:cs_id}, function (data) {
        result = data.result;
        $(".steps").html(template('step3-tpl',result));
    })
    /*点击编辑时，模态框数据回显*/
    $(document).on('click','.btn-ct-edit,#ct-add', function () {
        li = $(this).parents('li');
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
        var ct_id = $(this).attr('data-ct-id');
        $("#ct-add-form").ajaxSubmit({
            data:{
                ct_id:$(this).attr('data-ct-id') ,
                ct_cs_id:cs_id,
                ct_is_free:$("#checkbox-is-free").prop("checked") ? 1 : 0,
            },
            success: function (data) {
                /*点击添加后有几种办法刷新页面*/
                /*先关闭模态框*/
                $("#chapterModal").modal('hide');
                var newCtName = $('#ct-add-form').find('input[name="ct_name"]').val();
                var newDuration = $('#ct-add-form').find('input[name="ct_minutes"]').val()+':'+$('#ct-add-form').find('input[name="ct_seconds"]').val();
                /*方式一，直接整个页面刷新，不建议*/
                //location.reload();
                /*方式二，再次请求模板，局部渲染列表*/
                //$.get('/v6/course/lesson',{cs_id:cs_id}, function (data) {
                //    $(".steps").html(template('step3-tpl',data.result));
                //})
                /*方式三，页面渲染的时候，把课时列表缓存下来，点击添加时候，遍历列表，如果是编辑，则找到对应的，编辑渲染，如果是添加，则push一个*/
                    //先判断编辑还是添加
                if (ct_id){
                    for(var i = 0; i < result.lessons.length; i++) {
                        if (result.lessons[i].ct_id==ct_id){
                            result.lessons[i].ct_name = newCtName;
                            result.lessons[i].ct_video_duration = newDuration;
                        }
                    }
                }else{
                    result.lessons.push({
                        ct_id:data.result,
                        ct_name:newCtName,
                        ct_video_duration:newDuration,
                    })
                }
                $(".steps").html(template('step3-tpl',result));

            }
        })
    })


})
