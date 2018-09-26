var daynum = +sessionStorage.getItem('daynum')
var deadnum = JSON.parse(sessionStorage.deadnum);
var killernum = +sessionStorage.getItem('killernum');
var result1 = sessionStorage.getItem('result1');
var result2 = sessionStorage.getItem('result2');
var outcome = sessionStorage.getItem('result');
var klist = JSON.parse(sessionStorage.klist);
//--------------复制多个main------------’
var main2 = document.getElementsByClassName('main2')[0]
var box = document.getElementsByClassName('box')
var blank1 = document.getElementsByClassName('blank1');
var blank2 = document.getElementsByClassName('blank2');
var result = document.getElementsByClassName('result');
var end = document.getElementsByClassName('end');
if (klist.length % 2 == 0) {
    daynum--;
}
console.log('今天是第几天：' + daynum)
var day = document.getElementsByClassName('day');
console.log('死掉的人顺序：' + klist)
var day = document.getElementsByClassName('day');
for (i = 0; i < daynum - 1; i++) {
    main2.append(box[0].cloneNode(1));
}
for (i = 0; i < daynum; i++) {
    var num = ['一', '二', '三', '四', '五', '六', '七', '八', '九']
    day[i].textContent = '第' + num[i] + '天';
}
console.log("deadnum:" + deadnum)
console.log('进行了' + daynum + '天')
$('#win').text(outcome)
result[0].textContent = result1
result[1].textContent = result2;
for (i = 0; i < klist.length; i++) {
    blank1[i].textContent = deadnum[i]
    blank2[i].textContent = klist[i]
    if (klist.length % 2 == 1) {
        end[end.length - 1].textContent = '游戏结束 ';
    }
    $.each(deadnum, function(idx) {
        if (deadnum[idx] == 0) {
            end[idx].textContent = "无任何操作"
        }
    });
}