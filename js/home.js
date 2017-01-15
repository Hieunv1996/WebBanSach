$(document).ready(function () {
    $(".img-hover").mouseenter(function () {
        $(".product-search").fadeIn();
    });
    $(".img-hover").mouseleave(function () {
        $(".product-search").fadeOut();
    });
});

$(document).ready(function () {
    $(".item").mouseenter(function () {
        $(".product-button").slideDown();
    });
    $(".item").mouseleave(function () {
        $(".product-button").slideUp();
    });
});
