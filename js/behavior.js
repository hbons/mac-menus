$(document).ready(function() {

    var menuIsOpen = false;
    var submenuIsOpen = false;
    var lastClickedItem = null;

    if(window.location.hash)
        OpenMenu($(".bar > " + window.location.hash + ".item:not(.disabled)"));

    $("html").click(function() {
        $(".menu").fadeOut(150);
        $(".bar > .item").removeClass("active");

        menuIsOpen = false;
    });

    $("hr, .item.disabled").on("mouseenter", function(event) {
        $(this).siblings(".item").find("> .menu").hide();
        $(this).siblings(".item").removeClass("active");
    });

    $(".bar > .item:not(.disabled)").on("click", function(event) { 
        OpenMenu (this);

        $("input").focus();
        event.stopPropagation();
    });

    $(".bar > .item > .menu").on("mouseleave", function(event) {
        if (!$(this).find("> .item > .menu").is(":visible"))
          $(this).find("> .item").removeClass("active");
    });

    $(".item:not(.disabled)").on("mouseenter", function(event) {
        if (!menuIsOpen)
            return;

        $(this).siblings(".item").removeClass("active");
        $(this).addClass("active");

        $(this).siblings(".item").find("> .menu").hide();
        $(this).find("> .menu").show();

        $("input").focus();
        event.stopPropagation();
    });

    $(".menu > .item > .menu").on("mouseleave", function(event) {
        $(this).find("> .item").removeClass("active");
    });

    function OpenMenu(item) {
        $(".item").removeClass("active");
        $(item).toggleClass("active");

        if(menuIsOpen) {
            if (lastClickedItem == item)
                $(item).find("> .menu").fadeOut(150);

            menuIsOpen = false;
            return;
        } else {
            $(item).find("> .menu").show();
            menuIsOpen = true;
        }

        lastClickedItem = item;
    }
});