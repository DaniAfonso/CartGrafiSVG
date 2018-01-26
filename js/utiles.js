let cardTitle =
    "<div tabindex='-1' class='cardTitle card text-center' style='width: 30%; min-width: 18rem; margin-top: 2rem;'>" +
    "<img aria-label='Imagen de cartelera de la película.' class='card-img-top' src='recursos/caratulas/avatar.jpg' alt='Card image cap'>" +
    "<div class='card-body'> " +
    " <h1 tabindex='0' class='card-title'></h1>" +
    " <p tabindex='0' class='card-text'></p>" +
    "<button type='button' href='#' aria-label='Pulse enter para ver más información.' tabindex='0' class='btn btn-primary' data-toggle='modal' data-target='#myModal'>Información</button> " +
    "</div>" +
    "</div>";

var tipos = [{
    title: 'Resultados de la votación:',
    pieSliceText: 'label',
    slices: {
        4: {
            offset: 0.2
        },
        12: {
            offset: 0.3
        },
        14: {
            offset: 0.4
        },
        15: {
            offset: 0.5
        },
    }

}, {
    title: 'Resultados de la votación',
    backgroundColor: "#f1f1f1",
    is3D: true,
    vAxis: {
        textPosition: 'in'
    }
}, {
    title: 'Resultados de la votación:',
    pieHole: 0.4
}]