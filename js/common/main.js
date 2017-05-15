/*
* paths����
* */
require.config({
    baseUrl:'/',
    paths: {
        //ÿ��ҳ���Ӧ��ģ��
        index: 'js/home/index',
        login: 'js/home/login',
        repass: 'js/home/repass',
        settings: 'js/home/settings',
        tcEdit: 'js/teacher/edit',
        tcList: 'js/teacher/list',
        usList: 'js/user/list',
        usProfile: 'js/user/profile',
        csList: 'js/course/list',
        csAdd: 'js/course/add',
        cgAdd: 'js/course/category_add',
        cgList: 'js/course/category_list',
        csAdd1: 'js/course/course_add_step1',
        csAdd2: 'js/course/course_add_step2',
        csAdd3: 'js/course/course_add_step3course',

        //����ģ��
        aside: 'js/common/aside',
        header: 'js/common/header',
        util: 'js/common/util',

        //������ģ��
        jquery: 'lib/jquery/jquery.min',
        bootstrap: 'lib/bootstrap/js/bootstrap.min',
    },
    //������ͨģ�������
    shim:{
        bootstrap:{
            deps:['jquery']
        }
    }
});
/*
* ����������ͬ�����ز�ͬģ��
* */
var obj = {
    '/': 'index',
    '/html/home/login.html': 'login',
    '/html/home/repass.html': 'repass',
    '/html/home/settings.html': 'settings',
    '/html/teacher/edit.html': 'tcEdit',
    '/html/teacher/list.html': 'tcList',
    '/html/user/profile.html': 'usProfile',
    '/html/user/list.html': 'usList',
    '/html/course/add.html': 'csAdd',
    '/html/course/list.html': 'usList',
    '/html/course/category_add.html': 'cgAdd',
    '/html/course/category_list.html': 'cgList',
    '/html/course/course_add_step1.html': 'csAdd1',
    '/html/course/course_add_step2.html': 'csAdd2',
    '/html/course/course_add_step3.html': 'csAdd3'
};
var moduleName = obj[location.pathname];
require([moduleName])