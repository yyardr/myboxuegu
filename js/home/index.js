define(['aside','header','util'], function (ud,ud,util) {
    //检测登录状态
    util.checkLoginStatus();
    // loading
    util.loading();
})