// 封装一个animate动画函数
function animate(obj, target, callback) {
    // 先清除以前的定时器，只保留当前的一个定时器执行
    clearInterval(obj.timer);
    // 定义一个定时器
    obj.timer = setInterval(function () {
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft === target) {
            clearInterval(obj.timer)
            callback && callback();
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15)
}



window.addEventListener('load', function () {
    // 1.获取页面元素
    var arrow_l = document.querySelector('.arrow_l');
    var arrow_r = document.querySelector('.arrow_r');
    var focus = document.querySelector('.focus');
    var focusWidth = focus.offsetWidth;
    // 需要实现的功能1，鼠标经过focus,自动显示和隐藏左右按钮
    focus.addEventListener('mouseenter', function () {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
    })
    focus.addEventListener('mouseleave', function () {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
    })
    // 2需要实现的功能2，根据ul孩子的个数，自动为底部的ol创建同样数量的孩子数量,
    // 3需要实现的功能3，同时实现点击小圆圈实现图片移动效果
    // 1，获取需要的元素
    var ul = focus.querySelector('ul')
    console.log(ul.children.length)
    var ol = focus.querySelector('.circle');
    for (var i = 0; i < ul.children.length; i++) {
        // 创建一个li
        var li = this.document.createElement('li')
        // 同时给这个li设置一个自定义属性，方便后续使用，值为插入顺序的i值，实现同步
        li.setAttribute('index', i)
        // 把生成的li插入到ol列表中
        ol.appendChild(li);
        // 根据生成的li,绑定点击事件，实现轮播效果
        li.addEventListener('click', function () {
            // 取消上一次点击添加的类
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current'
            // 拿到当前点击li的索引值，
            var index = this.getAttribute('index');
            //  把值给
            num = index;
            circle = index;
            animate(ul, -index * focusWidth);
        })
    }
    // 把ol里面的第一个小li设置类名为 current
    ol.children[0].className = 'current';
    // 6. 克隆第一张图片(li)放到ul 最后面
      var first = ul.children[0].cloneNode(true);
      ul.appendChild(first);
    // 4需要实现的功能4，实现左右两侧按钮的播放
    // 右侧按钮播放
    // 1获取需要的元素
    var num = 0;
    var circle = 0;
    var frag = true;
    arrow_r.addEventListener('click', function () {
        if (frag) {
            frag = false;
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++
            animate(ul, -num * focusWidth, function () {
                frag = "true";
            })
            circle++;
            // 如果circle == 4 说明走到最后我们克隆的这张图片了 我们就复原
            if (circle == ol.children.length) {
                circle = 0;
            }
            circleChange();

        }
    })
    // 左侧按钮实现
    arrow_l.addEventListener('click', function () {
        if (frag) {
            frag = false;
            if (num ==0) {
                num = ul.children.length - 1;
                ul.style.left = -num * focusWidth + 'px'
            }
            num--;
            animate(ul, -num * focusWidth, function () {
                frag = true
            })
            circle--;
            circle = circle < 0 ? ol.children.length - 1 : circle;
            circleChange()
        }
    })
    function circleChange() {
        // 先清除其余小圆圈的current类名
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        // 留下当前的小圆圈的current类名
        ol.children[circle].className = 'current';
       
    }
    var timer = setInterval(function() {
        //手动调用点击事件
        arrow_r.click();
    }, 2000);
})


