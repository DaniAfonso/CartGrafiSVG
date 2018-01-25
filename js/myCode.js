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
    $("#md-body-info").attr("ident", i);
    $("#md-title").text(ip[i].titulo);
    let $img = $("#md-img");
    $img.attr("src", path + ip[i].img);
    $img.attr("class", "img-fluid");
    $img.attr("alt", "Imagen portada " + ip[i].titulo);
    $img.attr("style", "width: 100%");
    $("#md-res").children().eq(0).text("Título: " + ip[i].titulo);
    $("#md-res").children().eq(1).text("Año: " + ip[i].año);
    $("#md-res").children().eq(2).text("Duracion: " + ip[i].duracion + " minutos");
    $("#md-res").children().eq(3).text("Pais: " + ip[i].pais);
    $("#md-res").children().eq(4).text("Género: " + ip[i].genero);
    $("#md-res").children().eq(5).text("Sinopsis: " + ip[i].sinopsis);
}

let votante = {
    nombre: "",
    email: "",
    telefono: "",
    voto: ""
}

let jsVotantes;

function saveVote() {
    let nombre = $("#inputName").val();
    let email = $("#inputEmail").val();
    let telefono = $("#inputTelefono").val();
    let index = $("#md-body-info").attr("ident");

    jsVotantes.push({
        nombre: nombre,
        email: email,
        telefono: telefono,
        voto: index
    })

    localStorage.setItem("jsVotantes", JSON.stringify(jsVotantes));
    console.log(jsVotantes)
}

function cargar() {
    let local;

    local = localStorage.getItem("jsVotantes");
    if (local != null) {
        jsVotantes = JSON.parse(local);
        console.log(local);
        jsVotantes.forEach(function (value, indice, array) {
            console.log(value);
        })
    } else {
        jsVotantes = [];
    }
}