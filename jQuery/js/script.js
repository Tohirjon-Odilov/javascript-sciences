// ! Alitech => jQuery

// todo: effectlar
/* 
? funcsion
* show(parametr)
* hide(parametr)
* toggle(parametr)
? parametr
* "fast"
* "slow"
* 1000 (soniyalarda berish mumkin)
*/

$(document).ready(function() {
    $("#show-me").click(function() {
        $("h1").show("fast")
    })
    $("#hide-me").click(function() {
        $("h1").hide("slow")
    })
    $("#toggle").click(function() {
        $("h1").toggle(5000)
    })

    // ! fade

    $("#fadeOut").click(function() {
        $("h2").fadeOut()
    })
    $("#fadeIn").click(function() {
        $("h2").fadeIn()
    })
    $("#fadeToggle").click(function() {
        $("h2").fadeToggle()
    })
    $("#fadeTo").click(function() {
        $("h2").fadeTo("slow", 0.5)
    })

    // ! slide

    $('#slideUp').click(function() {
        $('h3').slideUp("slow")
    })
    $('#slideDown').click(function() {
        $('h3').slideDown("slow")
    })
    $('#slideToggle').click(function() {
        $('h3').slideToggle(5000)
    })

})