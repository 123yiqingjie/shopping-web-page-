// 表单验证的正则表达式
window.onload = function () {

    var tel = document.querySelector('#tel');
    var pwd = document.querySelector('#password')
    var affirmPwd = document.querySelector('#surepassword')
    var span1 = document.querySelector('.span1')
    var span2 = document.querySelector('.span2')
    var span3 = document.querySelector('.span3')
    var span4 = document.querySelector('.span4')
    var span5 = document.querySelector('.span5')
    var userName1 = document.querySelector('#userName1')
    // 用户名验证
    var regexp = /^[a-zA-Z0-9_-]{6,16}$/;   // {6,16}  中间不要有空格
    userName1.onblur = function () {
        if (regexp.test(this.value)) {
            console.log('正确的');
            span1.className = 'sucess';
            span1.innerHTML = '用户名格式输入正确';
        } else {
            console.log('错误的');
            span1.className = 'error';
            span1.innerHTML = '长度在6到16位中间不要有空格';
        }
    }
    // 电话号码表单验证
    var regtel = /^1[3|4|5|6|7|8|9]\d{9}$/;
    // 电话号码验证
    tel.onblur = function () {
        if (regtel.test(this.value)) {
            span2.className = 'success';
            span2.innerHTML = '<i class="success"></i>电话号码格式正确</span>';
        } else {
            span2.className = 'error';
            span2.innerHTML = '<i class="error"></i>电话号码格式输入不正确，请重新输入</span>';
        }
    }
    //登录密码
    var verify2 = /^[A-Z]{1}[A-Za-z0-9]{7,14}/;
    pwd.onblur = function () {
        var result2= verify2.test(this.value.trim())
        if (result2 && pwd != "") {
            console.log(true)
            span4.className = 'success';
            span4.innerHTML = '<i class="success_icon"></i>格式正确</span>';
        } else {
            console.log(false)
            span4.className = 'error';
            span4.innerHTML = '<i class="error_icon"></i>格式不正确</span>';
        }
    }
    affirmPwd.onblur = function () {
        //判断确认密码是否一致
        if (pwd == affirmPwd) {
            console.log(true)
            span5.className = 'success';
            span5.innerHTML = '<i class="success_icon"></i>格式正确</span>';
        } else {
            console.log(false)
            span5.className = 'success';
            span5.innerHTML = '<i class="success_icon"></i>格式不正确</span>';
        }
    }
}



