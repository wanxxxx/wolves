var msg = JSON.parse(sessionStorage.msg)
var people = []; //这是一个数组
var deadnum = []
for (i = 0; i < msg.length; i++) {
    people[i] = 'live';
}
console.log(msg)
sessionStorage.setItem('daynum', 1);
sessionStorage.setItem('checknum', 0);
sessionStorage.people = JSON.stringify(people); //存入
sessionStorage.deadnum = JSON.stringify(deadnum);
/*---------------------------------*/
var num = 1;
var num1 = 1;
var num2 = 2;
$('img').attr('src', 'img/aaa.png')
$('.btn').text("查看" + num1 + "号身份")
$('.num').hide()
$('.btn').click(function() {
    num++;
    if (num % 2 == 0) {
        if (num == (2 * msg.length)) {
            $('.btn').text("法官查看");
            $('.btn').click(function() {
                window.location.href = "diary.html"
            })

        } else {
            $('.btn').text("隐藏并传递给" + num2 + "号");

        }
        num1++;
        $('.num').show();
        if (msg[num1 - 2] == '狼人') {
            $('img').attr('src', 'img/狼人.png')
        } else {
            $('img').attr('src', 'img/村民.png')
        }
        console.log(num1, num2, num)

    }
    if (num % 2 == 1 & num !== ((2 * msg.length) + 1)) {
        $('.btn').text("查看" + num1 + "号身份")
        num2++;
        $('.num').hide()
        $('img').attr('src', 'img/aaa.png')
        console.log(num1, num2, num)
        $('.num').text(num1)
    }

})