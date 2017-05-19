define(['aside', 'header', 'util', 'template', 'jquery_region', 'jquery_form', 'jquery_uploadify', 'jquery_bootstrap_datepicker', 'jquery_bootstrap_datepicker_CN','ckeditor','jquery'], function (ud, ud, util, template, ud, ud, ud, ud, ud,CKEDITOR,$) {
    var returns = util({
        'checkLoginStatus': [],
        'loading': []
    });

    //定义两个变量，存储讲师名字及 图片上传结果，为了后面更新cookie，侧边头像实时更新所用，
    var tc_name;
    var imgUploadResult = {};
    /*个人中心数据回显*/
    $.get('/v6/teacher/profile', function (data) {
        tc_name = data.result.tc_name;
        var profileTpl = template('profile-tpl', data.result);
        $(".teacher-profile").html(profileTpl);
        initUploadify();
        initDatepicter();
        initPCD();
        initCkeditor();
        profileSubmit();
    });
    /*点击保存按钮，提交请求函数*/
    function profileSubmit() {
        $(document).on('click', '#btn-profile-save', function () {
            $(".settings form").ajaxSubmit({
                data: {
                    tc_hometown: $("#p").find(':selected').text() + '|' + $("#c").find(':selected').text() + '|' + $("#d").find(':selected').text(),
                    tc_province: $("#p").val(),
                    tc_city: $("#c").val(),
                    tc_district: $("#d").val(),
                },
                success: function () {
                    //更新cookie，侧边头像实时更新所用（左侧头像是根据cookie控制的）
                    $.cookie('userInfo', JSON.stringify({
                        "tc_name": tc_name,
                        "tc_avatar": imgUploadResult.path
                    }), {path: '/'})
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
    /*图片上传初始化*/
    function initUploadify() {
        $('#upfile').uploadify({
            swf: '/lib/uploadify/uploadify.swf',
            uploader: '/v6/uploader/avatar',
            fileObjName: 'tc_avatar',
            fileTypeExts: '*.gif; *.jpg; *.png',
            buttonText: '',
            //itemTemplate:'<i></i>',//可控制上传时候的显示文本
            //buttonClass:'btn btn-info',
            width: $(".cover").width(),
            height: $(".cover").height(),
            onUploadSuccess: function (file, data) {
                //获取图片上传结果，实时更新原本图片及左侧头像
                imgUploadResult = JSON.parse(data).result;
                $(".preview img").attr('src', imgUploadResult.path);
            }
        });
    }

    /*日期控件初始化*/
    function initDatepicter() {
        $('#tc-birthday').datepicker({
            language: 'zh-CN',
            format: 'yyyy-mm-dd',
            startDate: '1950-01-01',
            endDate: '1999-01-01',
            autoclose:true //选择日期后自动关闭
        });
        $('#tc-join-date').datepicker({
            language: 'zh-CN',
            format: 'yyyy-mm-dd',
            startDate: '1999-01-01',
            endDate: new Date(),
            autoclose:true //选择日期后自动关闭
        });
    }
    /*个人介绍富文本控件初始化*/
    function initCkeditor(){
      var edit  = CKEDITOR.replace("tc_introduce_ckeditor", [
          { name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
          { name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
          { name: 'links' },
      ]);
        edit.updateElement();
        edit.getData();
    }
})