/**
 * Created by Administrator on 2017/9/7.
 */
window.onload = function() {
    var input = document.getElementById('searchInt');
    console.log(input);
    input.onfocus = function () {
        console.log('开始输入');
        if (this.value == '请填写您宝贵的意见') {
            this.value = '';
            this.style.color = '#666';
        }
    }
    input.onblur = function () {
        console.log('结束编辑');
        if (this.value == '') {
            this.value = '请填写您宝贵的意见';
            this.style.color = '#dadada';
        }
    }
}