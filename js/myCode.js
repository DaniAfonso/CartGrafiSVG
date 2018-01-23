let path = "recursos/caratulas/";
$(document).ready(function () {
    $(ip).each(function (i) {
        $("#cuerpo").append(cardTitle);
    })

    $(".cardTitle").each(function (i) {
        $(this).children().eq(0).attr("src", path + ip[i].img);
        $(this).children().eq(1).children().eq(0).text(ip[i].titulo);
        $(this).children().eq(1).children().eq(1).text(ip[i].sinopsis.substring(0, 100) + "...");
        $(this).children().eq(1).children().eq(2).attr("href", ip[i].id);
        $(this).children().eq(1).children().eq(2).on("click", function () {
            modificarModal($(this).attr("href"));
        });
    })
});

function modificarModal(i) {
    console.log(i);
    $("#md-title").text(ip[i].titulo);
    let $img = $("#md-body-info").children().eq(0);
    $img.attr("src", path + ip[i].img);
    $img.attr("class", "img-fluid");
    $img.attr("alt", "Imagen portada " + ip[i].titulo);
    $img.attr("style", "width: 30%");
    $("#md-body-info").children().eq(1).text("Año: " + ip[i].año);
    $("#md-body-info").children().eq(2).text("Género: " + ip[i].genero);
    $("#md-body-info").children().eq(3).text("Sinopsis: " + ip[i].sinopsis);
}