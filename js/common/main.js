/*
 * paths配置
 * */
require.config({
    baseUrl:'/',
    paths: {
        //每个页面对应的模块
        index: 'js/home/index',
        login: 'js/home/login',
        repass: 'js/home/repass',
        settings: 'js/home/settings',
        tcEdit: 'js/teacher/edit',
        tcList: 'js/teacher/list',
        tcAdd: 'js/teacher/add',
        usList: 'js/user/list',
        usProfile: 'js/user/profile',
        csList: 'js/course/list',
        csAdd: 'js/course/add',
        cgAdd: 'js/course/category_add',
        cgList: 'js/course/category_list',
        csAdd1: 'js/course/course_add_step1',
        csAdd2: 'js/course/course_add_step2',
        csAdd3: 'js/course/course_add_step3',

        //公共模块
        aside: 'js/common/aside',
        header: 'js/common/header',
        util: 'js/common/util',

        //第三方模块
        //依赖jquery 的
        jquery: 'lib/jquery/jquery.min',
        bootstrap: 'lib/bootstrap/js/bootstrap.min',
        jquery_form:'lib/jquery-form/jquery.form',
        jquery_cookie:'lib/jquery-cookie/jquery.cookie',
        jquery_uploadify:'lib/uploadify/jquery.uploadify.min',
        jquery_Jcrop:'lib/jquery-Jcrop/js/Jcrop.min',

        //不依赖jquery 的
        nprogress:'lib/nprogress/nprogress',
        template:'lib/artTemplate/template',
    },
    //配置普通模块的依赖
    shim:{
        bootstrap:{
            deps:['jquery']
        },
        jquery_uploadify:{
            deps:['jquery']
        },
        jquery_Jcrop:{
            deps:['jquery']
        }

    }
});
/*
 * 根据域名不同，加载不同模块
 * */
var obj = {
    '/': 'index',
    '/html/home/login.html': 'login',
    '/html/home/repass.html': 'repass',
    '/html/home/settings.html': 'settings',
    '/html/teacher/edit.html': 'tcEdit',
    '/html/teacher/list.html': 'tcList',
    '/html/teacher/add.html': 'tcAdd',
    '/html/user/profile.html': 'usProfile',
    '/html/user/list.html': 'usList',
    '/html/course/add.html': 'csAdd',
    '/html/course/list.html': 'csList',
    '/html/course/category_add.html': 'cgAdd',
    '/html/course/category_list.html': 'cgList',
    '/html/course/course_add_step1.html': 'csAdd1',
    '/html/course/course_add_step2.html': 'csAdd2',
    '/html/course/course_add_step3.html': 'csAdd3'
};
var moduleName = obj[location.pathname];
require([moduleName])