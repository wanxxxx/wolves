var msg = JSON.parse(sessionStorage.msg)
var people = JSON.parse(sessionStorage.people);
var input1 = document.getElementsByClassName("choose1")
var input1 = document.getElementsByClassName("choose2")

var choose = document.getElementsByClassName("choose")
var main = document.getElementsByClassName("main")
for (i = 0; i < msg.length - 1; i++) {
    main[0].append(choose[0].cloneNode(1));
}
for (i = 0; i < msg.length; i++) {
    var input1 = document.getElementsByClassName("choose1")
    var input2 = document.getElementsByClassName("choose2")
    input1[i].textContent = msg[i];
    input2[i].textContent = (i + 1) + "号";
}
//--------------杀掉后变色--------------
$.each(people, function(idx) {
    if (people[idx] == 'dead') {
        input1[idx].setAttribute('style', ' background: #93adb3')
        input2[idx].setAttribute('style', ' background: #93adb3')
    }

});