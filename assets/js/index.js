$(function() {
    getUserInfo()

    // 点击按钮，实现退出功能
    $('#btnLogout').on('click', function() {
        // 提示用户是否确认退出
        layer.confirm('确定退出登录?', { icon: 3, title: '提示' }, function(index) {
            //do something
            // 1. 清空本地存储中的 token
            localStorage.removeItem('token')
                // 2. 重新跳转到登录页面
            location.href = '/login.html'

            // 关闭 confirm 询问框
            layer.close(index)
        })
    })
})

function getUserInfo() {
    $.ajax({
        method: 'GET',
        url: '/my/userinfo',
        // headers: {
        //     Authorization: localStorage.setItem('token') || ''
        // },
        success: function(res) {
            console.log(res);
        }
    })
}
//渲染用户头像
function renderAvatar(user) {
    //获取 昵称 或用户名
    var name = user.nickname || user.username
        //设置欢迎的文本
    $('#welcome').html('欢迎&nbsp;&nbsp;' + name)
        //按需渲染用户的头像
    if (user.user_pic !== null) {
        $('.layui-nanv-img').attr('stc', user.user_pic).show()
        $('.text-anater').hide() //隐藏文字头像
    } else {
        //渲染文本头像
        $('.layui-nav-img').hide() //隐藏图片头像
        var first = name[0].toUpperCase() //获取用户名的第一个首字
            //显示文字头像的显示内容，并显示额
        $('.text-avater').html(first).show
    }
}