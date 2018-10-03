$("#img1").animate({
    left: '15%',
}, 1300);
$("#img").animate({
    opacity: '1',
}, 2300);

function change() {
    $("main").animate({
        opacity: '0',
    }, 2000, function() {
        window.location.href = "start.html";
    });
}
$('.rule1').click(function() {
    $("main").animate({
        top: '-100vh',
    }, 2000, );
    $(".main1").animate({
        opacity: '0',
    }, 2000, );
    $(".main2").animate({
        opacity: '1',
    }, 2000, );

})
$('.rule2').click(function() {
    $("main").animate({
        top: '0',
    }, 2000, );
    $(".main1").animate({
        opacity: '1',
    }, 2000, );
    $(".main2").animate({
        opacity: '0',
    }, 2000, );
})