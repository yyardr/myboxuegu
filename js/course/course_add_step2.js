define(['bootstrap', 'aside', 'header', 'util', 'template','jquery_form','jquery_uploadify','jquery_Jcrop','jquery'], function (ud, ud, ud, util, template,ud,ud,ud,$) {
    var returns = util({
        'checkLoginStatus': [],
        'loading': [],
        'getSearch':['cs_id']

    });
    /*课程编辑页面*/
    /*定义一个全局的变量存储图片裁剪的实例*/
    var J = null;
    /*数据回显*/
    var cs_id = returns.getSearch;
    $.get('/v6/course/picture',{cs_id:cs_id}, function (data) {
        $("#cs-steps2").html(template('step2-tpl',data.result));
        initUploadify();
    })
    /*点击选择图片，上传图片*/
    function initUploadify(){
        $("#step2-uploadify").uploadify({
            swf: '/lib/uploadify/uploadify.swf',
            uploader: '/v6/uploader/cover',
            fileObjName:'cs_cover_original',
            formData:{
                cs_id:cs_id
            },
            buttonText:'上传图片',
            buttonClass:'btn btn-success btn-sm btn-uploadify' ,
            width:100,
            itemTemplate:'<i></i>',
            onUploadSuccess: function (file,data) {
                var imgData = JSON.parse(data);
                $(".preview img").attr('src',imgData.result.path);
                $(".thumb img").attr('src',imgData.result.path);
            }
        })
    }
    /*点击裁剪按钮，初始化jquery_Jcrop插件,选取结果*/
    $(document).on('click','#imgJcrop', function () {
        $('.preview img').Jcrop({
            aspectRatio: 2,
            setSelect: [ 0,0,300,150 ],
            bgColor: 'skyblue',
            minSize:[300,150]

        }, function () {
            J = this;
        });
    });
    /*点击保存按钮，获取选取结果并请求，跳转到第三步*/
    $(document).on('click','#imgSave', function () {
        var JcropResult = J.getSelection();
        $.post("/v6/course/update/picture",{
            cs_id:cs_id,
            x:JcropResult.x,
            y:JcropResult.y,
            w:JcropResult.w,
            h:JcropResult.h,
        }, function () {
            location.href = '/html/course/course_add_step3.html?cs_id='+cs_id;

        })
    });
})