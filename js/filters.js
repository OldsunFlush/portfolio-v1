$(document).ready(function () {
    function a() {
        $(".audiovisuel").animate({
            opacity: 0.1
        }, 150);
        $(".webdev").animate({
            opacity: 0.1
        }, 150);
        $(".graphic").animate({
            opacity: 0.1
        }, 150)
    }
    $(".button-audiovisual").click(function () {
        a();
        $(".audiovisuel").animate({
            opacity: 1
        }, 100)
    });
    $(".button-web-development").click(function () {
        a();
        $(".webdev").animate({
            opacity: 1
        }, 100)
    });
    $(".button-graphic-design").click(function () {
        a();
        $(".graphic").animate({
            opacity: 1
        }, 100)
    });
    $(".button-all").click(function () {
        a();
        $(".audiovisuel, .webdev, .graphic").animate({
            opacity: 1
        }, 100)
    })
});