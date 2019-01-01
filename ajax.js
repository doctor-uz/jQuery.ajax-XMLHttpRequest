$.ajax({
    url: "/data.json",
    method: "GET",
    success: function(links) {
        var html = "";
        var name;
        var url;

        for (var i = 0; i < links.length; i++) {
            name = links[i].headline;
            url = links[i].url;
            html += "<a class='top' href=" + url + ">" + name + "</a>";
        }

        $("#headlines").html(html);
        console.log($("#headlines").html());
    }
});
