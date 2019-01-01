(function() {
    $(document).ready(function() {
        //I like using it, makes me feel more comfortable
        var elem = $("#headlines");
        var links = $(".top");
        var animId;

        var left = elem.offset().left;

        function moveHeadlines() {
            left--;
            elem.css({ left: left });

            if (left <= -links.first().outerWidth()) {
                left += links.first().outerWidth();
                links.first().appendTo(elem);
                links = $(".top"); //get the links again because links[0] stays links[0] but now at the end
                elem.css({ left: left });
            }

            animId = requestAnimationFrame(moveHeadlines);
        }
        moveHeadlines();

        links.hover(
            //if I need to add the handler to links which are dynamically added after the page is loaded
            //I will do it with "on" like you explained and mouseenter and mouseleave, but I just like hover too much :X
            function() {
                cancelAnimationFrame(animId);
                $(this).css({ color: "#1a1aff", textDecoration: "underline" });
            },
            function() {
                moveHeadlines();
                $(this).css({ color: "#ff1ac6", textDecoration: "none" });
            }
        );
    });
})();
