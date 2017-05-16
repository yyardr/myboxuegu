define(['jquery','jquery_cookie'], function ($,ud) {
    var util =  {
        //其他页面检测是否登录
        checkLoginStatus: function () {
            if (!$.cookie('PHPSESSID')){
                location.href = '/html/home/login.html'
            }
        },
        //页面发起ajax请求，产生loading效果
        loading: function () {
            $(document).on('ajaxStart', function () {
                $(".overlay").show();
            }).on('ajaxStop', function () {
                $(".overlay").hide();
            })
        },
        getSearch: function (searchKey) {
            var searchObj = {},temp;
            var searchArr = location.search.slice(1).split('&');
            for(var i = 0; i < searchArr.length; i++) {
                temp = searchArr[i].split('=');
                searchObj[temp[0]] = temp[1];
            }
            return searchKey==null?searchObj:searchObj[searchKey];


        }
    };
   //传入所有要执行的方法名，格式范例：{'checkLoginStatus': [], 'fn2': [], ...}
    return function (methods) {
        var returns = {};
        for(var key in methods){
            returns[key] = util[key].apply(util,methods[key])
        }
        return returns;
    }


})