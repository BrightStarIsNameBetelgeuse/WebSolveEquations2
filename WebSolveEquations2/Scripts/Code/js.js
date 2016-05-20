$(document).ready(function(){
    var gear = document.getElementById("gear");
    var start_elem = $('.site-welcome');
    var count = 0;
    $('.site-welcome').on('mousewheel', function (event) {
        var delta = event.originalEvent.wheelDeltaY;
        if(delta < 0)
            $(this).css('top', '-80%');
        if (delta > 0) {
            $(this).css('top', '0');
        }
    });
    $('#gear').on('mousewheel', function (event) {
        //var delta = event.originalEvent.wheelDeltaY;
        var delta = event.originalEvent.movementY;
        if (delta < 0) {
            count += delta;
            gear.style.transform = "rotate(" + delta * 0.1 + "deg)";
        }
        if (delta > 0) {
            count -= delta;
            gear.style.transform = "rotate(" - delta * 0.1 + "deg)";
        }
        console.log(delta);
    });
    $('.more').on('click', function () {
        $('.site-welcome').css('top', '-80%');
    });
    window.addEventListener('scroll', function () {
        gear.style.transform = "rotate(" + window.pageYOffset * 0.5 + "deg)";
    });
});