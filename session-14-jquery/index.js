$("h1").addClass("big-title margin-50");

$("button").html("<em>Hey</em>");

$("a").attr("href", "http://google.com.vn");

$("button").click(function() {
    $("h1").css("color", "#000000");
});

$(document).keypress(function(event) {
    $("h1").html(event.key);
})

$(document).on("keypress", function(event) {
    $("h1").html(event.key);
})

$("button").click(function() {
    $("a").toggle();
    // $("h1").fadeToggle("slow");
    // $("h1").slideToggle("slow");
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});

