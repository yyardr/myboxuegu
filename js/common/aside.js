define(['jquery','jquery_cookie'], function ($,ud) {
    //头像及文字根据cookie改变
    var userInfo = JSON.parse($.cookie('userInfo')||{});
    userInfo.tc_avatar&&$(".aside .avatar img").attr('src',userInfo.tc_avatar);
    userInfo.tc_name&&$(".aside h4").text(userInfo.tc_name);
    //课程管理下拉设置
    $(".slide-down").on('click', function () {
        $(this).next().slideToggle();
    })
    //导航焦点定位：根据不同的域名定位不同的li
    // 对象左边的key对应网站的pathname，右边的值对应导航中a标签的href属性值
    var pathnameToHref = {
        '/': '/index.html',
        '/html/home/settings.html': '/index.html',
        '/html/home/repass.html': '/index.html',
        '/html/user/profile.html': '/html/user/list.html',
        '/html/teacher/add.html': '/html/teacher/list.html',
        '/html/teacher/edit.html': '/html/teacher/list.html'
    };
    var pathName = location.pathname;
    var href = pathnameToHref[pathName] ? pathnameToHref[pathName]:pathName;
    $(".aside .navs li a").removeClass('active').filter('[href="'+href+'"]').addClass('active');
})