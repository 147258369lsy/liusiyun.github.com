/**
 * Created by Administrator on 2017/9/6.
 */
window.onload = function() {
    var btn = document.getElementById('btn');
    btn.onclick = function () {
        this.disabled = true;
        var that = this;
        var seconds = 59;
        var timer = setInterval(function () {
            btn.innerText = '剩余' + seconds-- + '秒';
            if (seconds < 0) {
                clearInterval(timer);
                that.disabled = false;
                that.innerText = '重新发送';
            }
        }, 1000)
    }


    var input1 = document.getElementById('searchInput1');
    console.log(input1);
    input1.onfocus = function(){
        console.log('开始输入');
        if(this.value == '请输入手机号'){
            this.value = '';
            this.style.color = '#ccc';
        }
    }
    input1.onblur = function(){
        console.log('结束编辑');
        if(this.value == ''){
            this.value = '请输入手机号';
            this.style.color = '#dfdfdf';
        }
    }

    var input2 = document.getElementById('searchInput2');
    console.log(input2);
    input2.onfocus = function(){
        console.log('开始输入');
        if(this.value == '验证码'){
            this.value = '';
            this.style.color = '#ccc';
        }
    }
    input2.onblur = function(){
        console.log('结束编辑');
        if(this.value == ''){
            this.value = '验证码';
            this.style.color = '#dfdfdf';
        }
    }

    var input3 = document.getElementById('searchInput3');
    console.log(input3);
    input3.onfocus = function(){
        console.log('开始输入');
        if(this.value == '设置密码'){
            this.value = '';
            this.style.color = '#ccc';
        }
    }
    input3.onblur = function(){
        console.log('结束编辑');
        if(this.value == ''){
            this.value = '设置密码';
            this.style.color = '#dfdfdf';
        }
    }
}

