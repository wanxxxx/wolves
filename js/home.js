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
$('div').click(function() {
    $(".main1").animate({
        top: '-100vh',
        opacity: '0',
    }, 2000, );
})
$("#img").hover(function() {
    $("#img")
        .animate({ top: '56.5%', }, 300, )
        .animate({ top: '63%', }, 300, )
        .animate({ top: '58%', }, 300, )
        .animate({ top: '62%', }, 300, )
        .animate({ top: '59.5%', }, 300, )
        .animate({ top: '60.5%', }, 300, )
        .animate({ top: '60%', }, 300, )
})